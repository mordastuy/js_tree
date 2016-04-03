/**
 * Created by nick on 4/3/16.
 */

'use strict';

import { isUrl } from './reg_exp_url';

/**
 * Renders the tree view in the DOM
 */
function render(node, items) {
    const $docFragment = document.createDocumentFragment();
    const $node = document.getElementById(node);

    renderNode($docFragment, items);

    $node.appendChild($docFragment);

    $node.classList.add('jstree-default');
}

function renderNode($node, items) {
    const $ul = $node.appendChild(document.createElement('ul'));

    items.forEach(function (item) {
        const
            $li          = $ul.appendChild(document.createElement('li')),
            $insExpander = document.createElement('ins'),
            $insIcon     = document.createElement('ins'),
            $a           = document.createElement('a');

        const isItemNameUrl = isUrl(item.name);

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

        if(isItemNameUrl){
            $a.href = item.name;
            $a.target = '_blank';
        }

        $a.appendChild(document.createTextNode(item.name));

        $li.appendChild($insExpander);
        $li.appendChild($a);

        $insExpander.addEventListener('click', function (event) {
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

function hasChildren(item) {
    return item.children && item.children.length;
}

export {render};