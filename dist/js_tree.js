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
	
	var _items = __webpack_require__(17);
	
	var _items2 = _interopRequireDefault(_items);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var treeView = new _js_tree.TreeView('tree', _items2.default);
	
	// let treeView = new TreeView('tree', '/dist/mocks/items.json');

	// treeView.saveData(/api/items);

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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helpers = __webpack_require__(4);
	
	var _get_data = __webpack_require__(14);
	
	var _get_data2 = _interopRequireDefault(_get_data);
	
	var _save_data = __webpack_require__(16);
	
	var _save_data2 = _interopRequireDefault(_save_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TreeView = function () {
	    function TreeView(node, items) {
	        _classCallCheck(this, TreeView);
	
	        this.node = node;
	        this.items = items;
	
	        if ((typeof items === 'undefined' ? 'undefined' : _typeof(items)) === 'object') {
	            (0, _helpers.render)(node, items);
	        } else {
	            (0, _get_data2.default)(items).then(function (items) {
	                return (0, _helpers.render)(node, items);
	            });
	        }
	    }
	
	    _createClass(TreeView, [{
	        key: 'saveData',
	        value: function saveData(url) {
	            var items = (0, _helpers.getTreeAsJson)(this.node);
	            (0, _save_data2.default)(url, items).then(console.log).catch(alert);
	        }
	    }]);
	
	    return TreeView;
	}();
	
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
	exports.getTreeAsJson = exports.render = undefined;
	
	var _render_tree = __webpack_require__(5);
	
	var _getTreeAsJson = __webpack_require__(13);
	
	var _getTreeAsJson2 = _interopRequireDefault(_getTreeAsJson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.render = _render_tree.render;
	exports.getTreeAsJson = _getTreeAsJson2.default;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.render = undefined;
	
	var _render_tree = __webpack_require__(6);
	
	Object.defineProperty(exports, 'render', {
	  enumerable: true,
	  get: function get() {
	    return _render_tree.render;
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/3/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.render = undefined;
	
	var _append_leaf = __webpack_require__(7);
	
	var _context_menu = __webpack_require__(12);
	
	var _context_menu2 = _interopRequireDefault(_context_menu);
	
	var _listeners = __webpack_require__(10);
	
	var listeners = _interopRequireWildcard(_listeners);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Renders the tree view in the DOM
	 */
	function render(node, items) {
	    var $docFragment = document.createDocumentFragment(),
	        $node = document.getElementById(node);
	
	    renderNode($docFragment, items);
	    addContextMenu();
	
	    $node.appendChild($docFragment);
	
	    $node.classList.add('jstree-default');
	}
	
	function renderNode($node, items) {
	    var $ul = $node.appendChild(document.createElement('ul'));
	
	    items.forEach(function (item) {
	        var $li = (0, _append_leaf.appendLeaf)($ul, item);
	
	        if ((0, _append_leaf.hasChildren)(item)) {
	            renderNode($li, item.children);
	        }
	    });
	}
	
	function addContextMenu() {
	    var $div = document.createElement('div');
	
	    $div.innerHTML = _context_menu2.default;
	
	    $div.querySelector('#ctx-menu__add-item').addEventListener('click', listeners.addItemListener);
	
	    document.body.appendChild($div);
	}
	
	exports.render = render;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hasChildren = exports.appendLeaf = undefined;
	
	var _reg_exp_url = __webpack_require__(8);
	
	var _listeners = __webpack_require__(10);
	
	var listeners = _interopRequireWildcard(_listeners);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function appendLeaf($node, item) {
	    var $li = $node.appendChild(document.createElement('li')),
	        $insExpander = document.createElement('ins'),
	        $insIcon = document.createElement('ins'),
	        $a = document.createElement('a'),
	        $span = document.createElement('span');
	
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
	
	    hasChildren(item) ? $li.classList.add('jstree-closed') : $li.classList.add('jstree-leaf');
	
	    $insExpander.innerHTML = '&nbsp';
	
	    $insIcon.innerHTML = '&nbsp';
	    $insIcon.classList.add('jstree-icon');
	
	    if (item.icon) {
	        (function () {
	            var $img = document.createElement('img');
	
	            $img.src = item.icon;
	            $img.width = 15;
	            $img.height = 15;
	
	            $img.onload = function (event) {
	                $insIcon.innerHTML = '';
	                $insIcon.appendChild($img);
	                $insIcon.classList.remove('jstree-icon');
	            };
	        })();
	    }
	
	    $a.appendChild($insIcon);
	
	    if (item.url && (0, _reg_exp_url.isUrl)(item.url)) {
	        (0, _reg_exp_url.isUrl)(item.url);
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
	
	exports.appendLeaf = appendLeaf;
	exports.hasChildren = hasChildren;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isUrl = exports.replaceUrl = undefined;
	
	var _constants = __webpack_require__(9);
	
	function replaceUrl(text) {
	    return text.replace(_constants.REG_EXP_URL, function (url) {
	        return '<a target="_blank" href="' + url + '">' + url + '</a>';
	    });
	}
	
	function isUrl(text) {
	    return _constants.REG_EXP_URL.test(text);
	}
	
	exports.replaceUrl = replaceUrl;
	exports.isUrl = isUrl;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var REG_EXP_URL = /((https?|ftp)\:\/\/)([0-9A-Za-z\:\.\/\_\-\?\#\=\&]+)(\ )?/g;
	
	var ENTER_KEY_CODE = 13;
	
	exports.REG_EXP_URL = REG_EXP_URL;
	exports.ENTER_KEY_CODE = ENTER_KEY_CODE;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addItemListener = exports.contextMenuHideListener = exports.contextMenuShowListener = exports.expandItemsListener = undefined;
	
	var _shared_data = __webpack_require__(11);
	
	var _shared_data2 = _interopRequireDefault(_shared_data);
	
	var _constants = __webpack_require__(9);
	
	var _append_leaf = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function expandItemsListener(event) {
	    var $li = event.target.parentNode,
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
	
	    var $target = event.target.localName === 'ins' ? event.target : event.target.parentNode;
	
	    _shared_data2.default['lastItemCtxMenuCalled'] = $target;
	
	    var ctxMenu = document.getElementById('ctx-menu');
	    ctxMenu.style.display = 'block';
	    ctxMenu.style.left = event.pageX - 10 + 'px';
	    ctxMenu.style.top = event.pageY - 10 + 'px';
	}
	
	function contextMenuHideListener(event) {
	    var ctxMenu = document.getElementById('ctx-menu');
	    ctxMenu.style.display = '';
	    ctxMenu.style.left = '';
	    ctxMenu.style.top = '';
	}
	
	function addItemListener(event) {
	    var $li = _shared_data2.default['lastItemCtxMenuCalled'].parentNode.parentNode,
	        $ul = $li.querySelector('ul');
	
	    $ul ? createNewLeaf($ul) : $li.appendChild(createNewLeaf(document.createElement('ul')));
	
	    $li.classList.remove('jstree-leaf');
	    $li.classList.remove('jstree-closed');
	    $li.classList.add('jstree-open');
	
	    $li.querySelector('input').focus();
	
	    function createNewLeaf($ul) {
	        var $newLi = (0, _append_leaf.appendLeaf)($ul, {}),
	            $a = $newLi.querySelector('a'),
	            $input = document.createElement('input');
	
	        $input.type = 'text';
	
	        $ul.style.display = 'block';
	
	        $newLi.replaceChild($input, $a);
	
	        $input.addEventListener('keyup', function (event) {
	            if (event.keyCode === _constants.ENTER_KEY_CODE && event.target.value !== '') {
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
	}
	
	exports.expandItemsListener = expandItemsListener;
	exports.contextMenuShowListener = contextMenuShowListener;
	exports.contextMenuHideListener = contextMenuHideListener;
	exports.addItemListener = addItemListener;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SharedData = function () {
	    function SharedData() {
	        _classCallCheck(this, SharedData);
	    }
	
	    _createClass(SharedData, [{
	        key: 'get',
	        value: function get(prop) {
	            return cache[prop];
	        }
	    }, {
	        key: 'set',
	        value: function set(prop) {
	            cache[prop] = data;
	        }
	    }]);
	
	    return SharedData;
	}();
	
	var cache = {};
	var sharedData = new SharedData();
	
	exports.default = sharedData;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var contextMenuHtml = '<menu id="ctx-menu">\n    <menu title="Add" id="ctx-menu__add-item"></menu>\n</menu>';
	
	exports.default = contextMenuHtml;

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function getTreeAsJson(node) {
	    var items = [];
	    var $rootsLi = document.querySelectorAll('#' + node + ' > ul > li');
	
	    passThroughTree($rootsLi, items);
	
	    return items;
	}
	
	function passThroughTree($nodes, items) {
	    Array.prototype.forEach.call($nodes, function ($node) {
	        var item = JSON.parse($node.getAttribute('jstree-leaf-info'));
	        item.children = [];
	
	        items.push(item);
	
	        if ($node.childNodes && $node.childNodes[2]) {
	            passThroughTree($node.childNodes[2].childNodes, item.children);
	        }
	    });
	}
	
	exports.default = getTreeAsJson;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _xhr_wrapper = __webpack_require__(15);
	
	var _xhr_wrapper2 = _interopRequireDefault(_xhr_wrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getData(url) {
	    return _xhr_wrapper2.default.getData(url).catch(function (error) {
	        alert(error);
	        return [];
	    });
	}
	
	exports.default = getData;

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SimpleXMLHttpRequest = function () {
	    function SimpleXMLHttpRequest() {
	        _classCallCheck(this, SimpleXMLHttpRequest);
	    }
	
	    _createClass(SimpleXMLHttpRequest, null, [{
	        key: 'getData',
	        value: function getData(url) {
	            return new Promise(function (resolve, reject) {
	                var request = new XMLHttpRequest();
	
	                request.open('GET', url, true);
	
	                request.onreadystatechange = function () {
	                    if (request.readyState != 4 || request.status != 200) return;
	
	                    if (request.status != 200) {
	                        return reject(new Error(request.statusText));
	                    }
	
	                    resolve(JSON.parse(request.responseText));
	                };
	
	                request.send();
	            });
	        }
	    }, {
	        key: 'sendData',
	        value: function sendData(url, data) {
	            return new Promise(function (resolve, reject) {
	                var request = new XMLHttpRequest();
	
	                request.open('POST', url, true);
	                request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	
	                request.onreadystatechange = function () {
	                    if (request.readyState != 4 || request.status != 200) return;
	
	                    if (request.status != 200) {
	                        return reject(new Error(request.statusText));
	                    }
	
	                    resolve(JSON.parse(request.responseText));
	                };
	
	                request.send(JSON.stringify(data));
	            });
	        }
	    }]);
	
	    return SimpleXMLHttpRequest;
	}();
	
	exports.default = SimpleXMLHttpRequest;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nick on 4/4/16.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _xhr_wrapper = __webpack_require__(15);
	
	var _xhr_wrapper2 = _interopRequireDefault(_xhr_wrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function saveData(url, items) {
	  return _xhr_wrapper2.default.sendData(url, items);
	}
	
	exports.default = saveData;

/***/ },
/* 17 */
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
	    "id": 13,
	    "name": 'GitHub',
	    "url": "http://github.com/",
	    "icon": "http://lorempixel.com/15/15/",
	    "isRoot": true,
	    "children": []
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
	    "children": [{
	        "id": 7,
	        "name": "Item 7",
	        "icon": null,
	        "isRoot": false,
	        "children": [{
	            "id": 9,
	            "name": "Item 9",
	            "icon": null,
	            "isRoot": false,
	            "children": []
	        }, {
	            "id": 10,
	            "name": "Item 10",
	            "icon": null,
	            "isRoot": false,
	            "children": []
	        }]
	    }, {
	        "id": 8,
	        "name": "Item 8",
	        "icon": null,
	        "isRoot": false,
	        "children": []
	    }]
	}, {
	    "id": 11,
	    "name": 'VanillaJS',
	    "url": "http://vanilla-js.com/",
	    "icon": "http://lorempixel.com/15/15/",
	    "isRoot": true,
	    "children": [{
	        "id": 12,
	        "name": "Item 12",
	        "icon": null,
	        "isRoot": false,
	        "children": []
	    }]
	}];
	
	exports.default = items;

/***/ }
/******/ ]);
//# sourceMappingURL=js_tree.js.map