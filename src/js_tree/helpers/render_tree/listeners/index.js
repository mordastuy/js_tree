/**
 * Created by nick on 4/4/16.
 */

'use strict';

import sharedData from '../../shared_data';
import { ENTER_KEY_CODE } from '../../constants';
import { appendLeaf } from '../append_leaf';

function expandItemsListener(event) {
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
}

function contextMenuShowListener(event) {
    event.preventDefault();

    const $target = event.target.localName === 'ins'
        ? event.target
        : event.target.parentNode;

    sharedData['lastItemCtxMenuCalled'] = $target;

    const ctxMenu = document.getElementById('ctx-menu');
    ctxMenu.style.display = 'block';
    ctxMenu.style.left = (event.pageX - 10) + 'px';
    ctxMenu.style.top = (event.pageY - 10) + 'px';
}

function contextMenuHideListener(event) {
    var ctxMenu = document.getElementById('ctx-menu');
    ctxMenu.style.display = '';
    ctxMenu.style.left = '';
    ctxMenu.style.top = '';
}

function addItemListener(event) {
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
                    id    : null,
                    name  : event.target.value,
                    icon  : null,
                    isRoot: false,
                    url   : null
                }));
            }
        });

        return $ul;
    }
}

export {
    expandItemsListener,
    contextMenuShowListener,
    contextMenuHideListener,
    addItemListener};