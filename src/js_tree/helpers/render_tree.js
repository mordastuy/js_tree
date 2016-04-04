/**
 * Created by nick on 4/3/16.
 */

'use strict';

import {isUrl} from './reg_exp_url';
import contextMenuHtml from '../templates/context_menu';
import sharedData from './shared_data';
import {ENTER_KEY_CODE} from './constants';

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
        const $li = appendLeaf($ul, item);

        if (hasChildren(item)) {
            renderNode($li, item.children);
        }
    });
}

function appendLeaf($node, item) {
    const
        $li          = $node.appendChild(document.createElement('li')),
        $insExpander = document.createElement('ins'),
        $insIcon     = document.createElement('ins'),
        $a           = document.createElement('a'),
        $span        = document.createElement('span');

    $li.setAttribute('jstree-leaf-info', JSON.stringify({
        id: item.id || null,
        name: item.name || null,
        icon: item.icon || null,
        isRoot: item.isRoot || false,
        url: item.url || null
    }));

    if (!item.isRoot) {
        $node.style.display = 'none';
    }

    hasChildren(item)
        ? $li.classList.add('jstree-closed')
        : $li.classList.add('jstree-leaf');

    $insExpander.innerHTML = '&nbsp';

    $insIcon.innerHTML = '&nbsp';
    $insIcon.classList.add('jstree-icon');

    if (item.icon) {
        let $img = document.createElement('img');

        $img.src = item.icon;
        $img.width = 15;
        $img.height = 15;

        $img.onload = (event) => {
            $insIcon.innerHTML = '';
            $insIcon.appendChild($img);
            $insIcon.classList.remove('jstree-icon');
        };
    }

    $a.appendChild($insIcon);

    if (item.url && isUrl(item.url)) {
        isUrl(item.url);
        $a.href = item.url;
        $a.target = '_blank';
    }

    $span.innerHTML = item.name;

    $a.appendChild($span);

    $li.appendChild($insExpander);
    $li.appendChild($a);

    $li.querySelector('a > ins').addEventListener('contextmenu', event => {
        event.preventDefault();

        const $target = event.target.localName === 'ins'
            ? event.target
            : event.target.parentNode;

        sharedData['lastItemCtxMenuCalled'] = $target;

        const ctxMenu = document.getElementById('ctx-menu');
        ctxMenu.style.display = 'block';
        ctxMenu.style.left = (event.pageX - 10) + 'px';
        ctxMenu.style.top = (event.pageY - 10) + 'px';
    });

    document.body.addEventListener('click', event => {
        var ctxMenu = document.getElementById('ctx-menu');
        ctxMenu.style.display = '';
        ctxMenu.style.left = '';
        ctxMenu.style.top = '';
    });

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

    return $li;
}

function addContextMenu() {
    const $div = document.createElement('div');

    $div.innerHTML = contextMenuHtml;

    $div.querySelector('#ctx-menu__add-item').addEventListener('click', event => {
        const
            $li = sharedData['lastItemCtxMenuCalled'].parentNode.parentNode,
            $ul = $li.querySelector('ul');

        $ul
            ? createNewLeaf($ul)
            : $li.appendChild(createNewLeaf(document.createElement('ul')));

        $li.classList.remove('jstree-leaf');
        $li.classList.remove('jstree-closed');
        $li.classList.add('jstree-open');

        $li.querySelector('input').focus();

        function createNewLeaf($ul) {
            let $newLi = appendLeaf($ul, {}),
                $a     = $newLi.querySelector('a'),
                $input = document.createElement('input');

            $input.type = 'text';

            $ul.style.display = 'block';

            $newLi.replaceChild($input, $a);

            $input.addEventListener('keyup', event => {
                if (event.keyCode === ENTER_KEY_CODE && event.target.value !== '') {
                    $a.querySelector('span').innerHTML = event.target.value;
                    $newLi.replaceChild($a, $input);
                    $newLi.setAttribute('jstree-leaf-info', JSON.stringify({
                        id: null,
                        name: event.target.value,
                        icon: null,
                        isRoot: false,
                        url: null
                    }));
                }
            });

            return $ul;
        }

    });

    document.body.appendChild($div);
}

function hasChildren(item) {
    return item.children && item.children.length;
}

export {render};