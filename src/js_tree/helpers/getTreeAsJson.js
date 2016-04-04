/**
 * Created by nick on 4/4/16.
 */

'use strict';

function getTreeAsJson(node) {
    const items = [];
    const $rootsLi = document.querySelectorAll(`#${node} > ul > li`);

    passThroughTree($rootsLi, items);

    return items;
}

function passThroughTree($nodes, items) {
    Array.prototype.forEach.call($nodes, $node => {
        let item = JSON.parse($node.getAttribute('jstree-leaf-info'));
        item.children = [];

        items.push(item);

        if ($node.childNodes && $node.childNodes[2]) {
            passThroughTree($node.childNodes[2].childNodes, item.children);
        }
    });
}

export default getTreeAsJson;