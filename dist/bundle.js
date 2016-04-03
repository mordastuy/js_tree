/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n * Created by nick on 4/2/16.\n */\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _js_tree = __webpack_require__(2);\n\nvar TreeView = _interopRequireWildcard(_js_tree);\n\nvar _items = __webpack_require__(3);\n\nvar _items2 = _interopRequireDefault(_items);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar treeView = new TreeView.default('tree', _items2.default);\n\nexports.default = { TreeView: TreeView, items: _items2.default };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\n(function (define) {\n    'use strict';\n\n    (function (root, factory) {\n        if (typeof define === 'function' && define.amd) {\n            define(factory);\n        } else if (( false ? 'undefined' : _typeof(exports)) === 'object') {\n            module.exports = factory();\n        } else {\n            root.TreeView = factory();\n        }\n    })(window, function () {\n        return function () {\n            /**\n             * Renders the tree view in the DOM\n             */\n            function render(node, items) {\n                var docFragment = document.createDocumentFragment();\n\n                var renderUl = function renderUl(node, items) {\n                    var ul = node.appendChild(document.createElement('ul'));\n\n                    items.forEach(function (item) {\n                        var li = ul.appendChild(document.createElement('li')),\n                            span = document.createElement('span');\n\n                        if (!item.isRoot) {\n                            ul.style.display = 'none';\n                        }\n\n                        span.innerText = '+ ';\n                        span.setAttribute('expanded', 'off');\n\n                        li.appendChild(span);\n                        li.appendChild(document.createTextNode(item.name));\n\n                        span.addEventListener('click', function (event) {\n                            var uls = event.target.parentNode.getElementsByTagName('ul');\n\n                            if (span.getAttribute('expanded') === 'off') {\n                                span.innerHTML = '- ';\n                                span.setAttribute('expanded', 'on');\n                                uls.length && (uls[0].style.display = 'block');\n                            } else {\n                                span.innerHTML = '+ ';\n                                span.setAttribute('expanded', 'off');\n                                uls.length && (uls[0].style.display = 'none');\n                            }\n                        });\n\n                        if (item.children && item.children.length) {\n                            renderUl(li, item.children);\n                        }\n                    });\n                };\n\n                renderUl(docFragment, items);\n\n                document.getElementById(node).appendChild(docFragment);\n            }\n\n            function TreeView(node, items) {\n                // this.handlers = {};\n                this.node = node;\n                this.items = items;\n                render(node, items);\n            }\n\n            return TreeView;\n        }();\n    });\n})(window.define);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js_tree.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js_tree.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nvar items = [{\n    \"id\": 1,\n    \"name\": \"Item 1\",\n    \"icon\": null,\n    \"isRoot\": true,\n    \"children\": [{\n        \"id\": 5,\n        \"name\": \"Item 5\",\n        \"icon\": null,\n        \"isRoot\": false,\n        \"children\": []\n    }, {\n        \"id\": 6,\n        \"name\": \"Item 6\",\n        \"icon\": null,\n        \"isRoot\": false,\n        \"children\": []\n    }]\n}, {\n    \"id\": 2,\n    \"name\": \"Item 2\",\n    \"icon\": null,\n    \"isRoot\": true,\n    \"children\": []\n}, {\n    \"id\": 3,\n    \"name\": \"Item 3\",\n    \"icon\": null,\n    \"isRoot\": true,\n    \"children\": []\n}, {\n    \"id\": 4,\n    \"name\": \"Item 4\",\n    \"icon\": null,\n    \"isRoot\": true,\n    \"children\": []\n}];\n\nmodule.exports = items;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./example/items.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./example/items.js?");

/***/ }
/******/ ]);