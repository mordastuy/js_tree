/**
 * Created by nick on 4/3/16.
 */

'use strict';

import { appendLeaf, hasChildren } from './append_leaf';
import contextMenuHtml from '../../templates/context_menu';
import * as listeners from './listeners';

/**
 * Renders the tree view in the DOM
 */
function render(node, items) {
    const
        $docFragment = document.createDocumentFragment(),
        $node = document.getElementById(node);

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

function addContextMenu() {
    const $div = document.createElement('div');

    $div.innerHTML = contextMenuHtml;

    $div.querySelector('#ctx-menu__add-item').addEventListener('click', listeners.addItemListener);

    document.body.appendChild($div);
}

export { render };