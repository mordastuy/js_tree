import { render, getTreeAsJson } from './helpers';
import getData from './api/get_data';
import saveData from './api/save_data';

class TreeView {
    constructor(node, items) {
        this.node = node;
        this.items = items;

        if (typeof items === 'object') {
            render(node, items);
        } else {
            getData(items)
                .then(items => render(node, items));
        }
    }
    
    saveData(url) {
        const items = getTreeAsJson(this.node);
        saveData(url, items)
            .then(console.log)
            .catch(alert);
    }
}

export default TreeView;