/**
 * Created by nick on 4/4/16.
 */

'use strict';
 
import SimpleXMLHttpRequest from './xhr_wrapper';

function saveData(url, items) {
    return SimpleXMLHttpRequest.sendData(url, items);
}

export default saveData;