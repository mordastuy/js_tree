/**
 * Created by nick on 4/4/16.
 */

'use strict';

class SimpleXMLHttpRequest {
    static getData(url) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.open('GET', url, true);

            request.onreadystatechange = () => {
                if (request.readyState != 4 || request.status != 200) return;

                if (request.status != 200) {
                    return reject(new Error(request.statusText));
                }

                resolve(JSON.parse(request.responseText));
            };

            request.send();
        });
    }

    static sendData(url, data) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

            request.onreadystatechange = () => {
                if (request.readyState != 4 || request.status != 200) return;

                if (request.status != 200) {
                    return reject(new Error(request.statusText));
                }

                resolve(JSON.parse(request.responseText));
            };

            request.send(JSON.stringify(data));
        });
    }
}

export default SimpleXMLHttpRequest;