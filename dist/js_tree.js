/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/2/16.
	 */
	
	'use strict';
	
	var _js_tree = __webpack_require__(2);
	
	var _items = __webpack_require__(6);
	
	var _items2 = _interopRequireDefault(_items);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var treeView = new _js_tree.TreeView('tree', _items2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/2/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TreeView = undefined;
	
	var _js_tree = __webpack_require__(3);
	
	var _js_tree2 = _interopRequireDefault(_js_tree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TreeView = _js_tree2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _helpers = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TreeView = function TreeView(node, items) {
	    _classCallCheck(this, TreeView);
	
	    this.node = node;
	    this.items = items;
	    (0, _helpers.render)(node, items);
	};
	
	exports.default = TreeView;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/3/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.render = undefined;
	
	var _render_tree = __webpack_require__(5);
	
	exports.render = _render_tree.render;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by nick on 4/3/16.
	 */
	
	'use strict';
	
	/**
	 * Renders the tree view in the DOM
	 */
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function render(node, items) {
	    var docFragment = document.createDocumentFragment();
	
	    renderNode(docFragment, items);
	
	    document.getElementById(node).appendChild(docFragment);
	}
	
	function renderNode(node, items) {
	    var SIGN_EXPANDED_ON = '- ',
	        SIGN_EXPANDED_OFF = '+ ';
	
	    var ul = node.appendChild(document.createElement('ul'));
	
	    items.forEach(function (item) {
	        var li = ul.appendChild(document.createElement('li')),
	            span = document.createElement('span');
	
	        if (!item.isRoot) {
	            ul.style.display = 'none';
	        }
	
	        span.innerText = SIGN_EXPANDED_OFF;
	        span.setAttribute('expanded', 'off');
	
	        li.appendChild(span);
	        li.appendChild(document.createTextNode(item.name));
	
	        span.addEventListener('click', function (event) {
	            var uls = event.target.parentNode.getElementsByTagName('ul');
	
	            if (span.getAttribute('expanded') === 'off') {
	                span.innerHTML = SIGN_EXPANDED_ON;
	                span.setAttribute('expanded', 'on');
	                uls.length && (uls[0].style.display = 'block');
	            } else {
	                span.innerHTML = SIGN_EXPANDED_OFF;
	                span.setAttribute('expanded', 'off');
	                uls.length && (uls[0].style.display = 'none');
	            }
	        });
	
	        if (item.children && item.children.length) {
	            renderNode(li, item.children);
	        }
	    });
	}
	
	exports.render = render;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var items = [{
	    "id": 1,
	    "name": "Item 1",
	    "icon": null,
	    "isRoot": true,
	    "children": [{
	        "id": 5,
	        "name": "Item 5",
	        "icon": null,
	        "isRoot": false,
	        "children": []
	    }, {
	        "id": 6,
	        "name": "Item 6",
	        "icon": null,
	        "isRoot": false,
	        "children": []
	    }]
	}, {
	    "id": 2,
	    "name": "Item 2",
	    "icon": null,
	    "isRoot": true,
	    "children": []
	}, {
	    "id": 3,
	    "name": "Item 3",
	    "icon": null,
	    "isRoot": true,
	    "children": []
	}, {
	    "id": 4,
	    "name": "Item 4",
	    "icon": null,
	    "isRoot": true,
	    "children": []
	}];
	
	exports.default = items;

/***/ }
/******/ ]);
//# sourceMappingURL=js_tree.js.map