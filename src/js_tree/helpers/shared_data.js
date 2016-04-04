/**
 * Created by nick on 4/4/16.
 */

'use strict';
 


class SharedData {
    get (prop) {
        return cache[prop]
    }
    
    set (prop){
        cache[prop] = data;
    }
}
const cache = {};
const sharedData = new SharedData();

export default sharedData;