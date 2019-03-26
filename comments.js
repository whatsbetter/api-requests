import { getConditions } from './_util';


export function create(params) {
    let text = params.text.replace(/(?:\r\n|\r|\n)/g, '\n');
    params.text = `""${text}""`;
    let conditions = getConditions(params);
    return `mutation {createComment${conditions}{id, text, autor{id,name,main_image, karma}}}`;

}

export function getByScore(params) {
    let conditions = getConditions(params);
    return`{comments${conditions}{id, text, autor{id,name,main_image,karma}}}`;
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

    return `mutation {${_type}${conditions}{id,useful,useless}}`;
}