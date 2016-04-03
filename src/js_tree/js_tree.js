import { render } from './helpers';

class TreeView {
    constructor(node, items){
        this.node = node;
        this.items = items;
        render(node, items);
    }
}

export default TreeView;