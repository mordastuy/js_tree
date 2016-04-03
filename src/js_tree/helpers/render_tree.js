/**
 * Created by nick on 4/3/16.
 */

'use strict';

import { isUrl } from './reg_exp_url';
import contextMenuHtml from '../templates/context_menu';

/**
 * Renders the tree view in the DOM
 */
function render(node, items) {
    const $docFragment = document.createDocumentFragment();
    const $node = document.getElementById(node);

    renderNode($docFragment, items);
    addContextMenu();

    $node.appendChild($docFragment);

    $node.classList.add('jstree-default');
}

function renderNode($node, items) {
    const $ul = $node.appendChild(document.createElement('ul'));

    items.forEach(item => {
        const
            $li          = $ul.appendChild(document.createElement('li')),
            $insExpander = document.createElement('ins'),
            $insIcon     = document.createElement('ins'),
            $a           = document.createElement('a');

        if (!item.isRoot) {
            $ul.style.display = 'none';
        }

        hasChildren(item)
            ? $li.classList.add('jstree-closed')
            : $li.classList.add('jstree-leaf');

        $insIcon.classList.add('jstree-icon');
        $insIcon.innerHTML = '&nbsp';

        $insExpander.innerHTML = '&nbsp';

        $a.appendChild($insIcon);

        if(item.url && isUrl(item.url)){
            $a.href = item.url;
            $a.target = '_blank';
        }

        $a.appendChild(document.createTextNode(item.name));

        $li.appendChild($insExpander);
        $li.appendChild($a);

        $li.addEventListener('contextmenu', event => {
            event.preventDefault();

            console.log(event);

            const ctxMenu = document.getElementById('ctx-menu');
            ctxMenu.style.display = 'block';
            ctxMenu.style.left = (event.pageX - 10)+'px';
            ctxMenu.style.top = (event.pageY - 10)+'px';
        });

        document.body.addEventListener('click',function(event){
            var ctxMenu = document.getElementById('ctx-menu');
            ctxMenu.style.display = '';
            ctxMenu.style.left = '';
            ctxMenu.style.top = '';
        },false);

        $insExpander.addEventListener('click', event => {
            const
                $li  = event.target.parentNode,
                $uls = $li.getElementsByTagName('ul');

            if ($li.classList.contains('jstree-open')) {
                $li.classList.remove('jstree-open');
                $li.classList.add('jstree-closed');
                $uls.length && ($uls[0].style.display = 'none');
            } else if ($li.classList.contains('jstree-closed')) {
                $li.classList.remove('jstree-closed');
                $li.classList.add('jstree-open');
                $uls.length && ($uls[0].style.display = 'block');
            }
        });

        if (hasChildren(item)) {
            renderNode($li, item.children);
        }
    });
}

function addContextMenu(){
    const $div = document.createElement('div');

    $div.innerHTML = contextMenuHtml;
    document.body.appendChild($div);
}

function hasChildren(item) {
    return item.children && item.children.length;
}

export {render};