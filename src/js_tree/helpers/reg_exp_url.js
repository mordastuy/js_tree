/**
 * Created by nick on 4/4/16.
 */

'use strict';

import { REG_EXP_URL } from './constants';

function replaceUrl(text){
    return text.replace(REG_EXP_URL, function (url) {
        return `<a target="_blank" href="${url}">${url}</a>`;
    });
}

function isUrl(text){
    return REG_EXP_URL.test(text);
}

export { replaceUrl, isUrl };