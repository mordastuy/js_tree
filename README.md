# JsTreeView on VanillaJS

A stupid, simple tree view written with vanilla JS.

It is able to expand/collapse any level on click, accept initial items as predefined array, accept links as a special item type - and link behave as a link (e.g. if user clicks - URL will be opened). Item may have icons and text. Text is required, icon is not required. There is ability to add item dynamically after initialization (for example on right click some popup menu appears and there is one item in menu named "Add new item"). Also there is ability to init component with data received from async AJAX call (like load data from remote server) as well as save current state of treeview  on the server via AJAX.
Nested levels count is not limited.

## Example Usage

```bash
npm install
npm start

http://localhost:8080/
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test JSTree</title>
    <link rel="stylesheet" href="/dist/css/styles.css">
</head>
<body>
    <div id="tree"></div>
    <script src="/dist/js_tree.js"></script>
</body>
</html>
```

### JavaScript

```js

var tree = new TreeView('tree', [
            {
                "id"      : 5,
                "name"    : "Item 5",
                "icon"    : null,
                "isRoot"  : true,
                "children": []
            },
            {
                "id"      : 6,
                "name"    : "Item 6",
                "icon"    : "http://lorempixel.com/15/15/",
				"url"     : "https://github.com/",
                "isRoot"  : true,
                "children": []
            }
        ]);

or

var tree = new TreeView('tree', '/dist/mocks/items.json');

// Save the tree's state
tree.saveData('/api/items');

```

## Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| `id` | `string` | ID of the DOM element to render tree in. |
| `items` | `array` | The array of items to populate the tree with. Each item is required to have a `name` and a `children` array. |
