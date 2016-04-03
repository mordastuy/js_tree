/**
 * Created by nick on 4/3/16.
 */

'use strict';

/**
 * Renders the tree view in the DOM
 */

export function render(node, items) {
    const docFragment = document.createDocumentFragment();

    renderNode(docFragment, items);

    document.getElementById(node).appendChild(docFragment);
}

function renderNode(node, items) {
    const ul = node.appendChild(document.createElement('ul'));

    items.forEach(function (item) {
        var li   = ul.appendChild(document.createElement('li')),
            span = document.createElement('span');

        if(!item.isRoot){
            ul.style.display = 'none';
        }

        span.innerText = '+ ';
        span.setAttribute('expanded', 'off');

        li.appendChild(span);
        li.appendChild(document.createTextNode(item.name));

        span.addEventListener('click', function (event) {
            var uls = event.target.parentNode.getElementsByTagName('ul');

            if (span.getAttribute('expanded') === 'off') {
                span.innerHTML = '- ';
                span.setAttribute('expanded', 'on');
                uls.length && (uls[0].style.display = 'block');
            } else {
                span.innerHTML = '+ ';
                span.setAttribute('expanded', 'off');
                uls.length && (uls[0].style.display = 'none');
            }
        });

        if (item.children && item.children.length) {
            renderNode(li, item.children);
        }
    });
}