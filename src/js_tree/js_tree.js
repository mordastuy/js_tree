(function (define) {
    'use strict';

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define(factory);
        } else if (typeof exports === 'object') {
            module.exports = factory();
        } else {
            root.TreeView = factory();
        }
    }(window, function () {
        const  { render } = require('./helpers');
        
        class TreeView {
            constructor(node, items){
                this.node = node;
                this.items = items;
                render(node, items);
            }
        }

        return TreeView;
    }));
}(window.define));
