/**
 * Created by nick on 4/4/16.
 */

'use strict';

import {isUrl} from '../reg_exp_url';
import * as listeners from './listeners';

function appendLeaf($node, item) {
    const
        $li          = $node.appendChild(document.createElement('li')),
        $insExpander = document.createElement('ins'),
        $insIcon     = document.createElement('ins'),
        $a           = document.createElement('a'),
        $span        = document.createElement('span');

    $li.setAttribute('jstree-leaf-info', JSON.stringify({
        id    : item.id || null,
        name  : item.name || null,
        icon  : item.icon || null,
        isRoot: item.isRoot || false,
        url   : item.url || null
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

    $li.querySelector('a > ins').addEventListener('contextmenu', listeners.contextMenuShowListener);

    document.body.addEventListener('click', listeners.contextMenuHideListener);

    $insExpander.addEventListener('click', listeners.expandItemsListener);

    return $li;
}

function hasChildren(item) {
    return item.children && item.children.length;
}

export {appendLeaf, hasChildren};