import { getConditions } from './_util';
import request from './_request';

export function create(params) {

    let text = params.text.replace(/(?:\r\n|\r|\n)/g, '\n');
    params.text = `""${text}""`;
    console.log(params)
    let conditions = getConditions(params);
    let query = `mutation {createComment${conditions}{id, text, autor{id,name,main_image}}}`;
    
    return request(query);
}

export function getByScore(params) {
    let conditions = getConditions(params);
    let query = `{comments${conditions}{id, text, autor{id,name,main_image}}}`;
    
    return request(query);
}


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