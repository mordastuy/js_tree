# JsTreeView on VanillaJS

A stupid, simple tree view written with vanilla JS.

## Example Usage

```bash
npm install
```

### HTML

```html
<div id="tree"></div>
<script src="/dist/js_tree.js"></script>
```

### JavaScript

```js

var tree = new TreeView('tree', [
            {
                "id"      : 5,
                "name"    : "Item 5",
                "icon"    : null,
                "isRoot"  : false,
                "children": []
            },
            {
                "id"      : 6,
                "name"    : "Item 6",
                "icon"    : "http://lorempixel.com/15/15/",
				"url"     : "https://github.com/",
                "isRoot"  : false,
                "children": []
            }
        ]);
```

## Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| `id` | `string` | ID of the DOM element to render tree in. |
| `items` | `array` | The array of items to populate the tree with. Each item is required to have a `name` and a `children` array. |
