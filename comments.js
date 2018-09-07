import { getConditions } from './_util';
import request from './_request';

/**
 *  Изменить полезность
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {Function}
 */
export function changeUseful(params, options) {
    let conditions = getConditions(params);
    
    let _type = 'usefulComment';
    
    if (options.type === 'minus') {
        _type = 'uselessComment';
    }

    let query = `mutation {${_type}${conditions}{id,useful,useless}}`;
    return request(query);
}