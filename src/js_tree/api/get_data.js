/**
 * Created by nick on 4/4/16.
 */

'use strict';
 
import SimpleXMLHttpRequest from './xhr_wrapper';

function getData(url) {
    return SimpleXMLHttpRequest
        .getData(url)
        .catch(error => {
            alert(error);
            return [];
        });
}

export default getData;