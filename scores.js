import { getConditions } from './_util';
import request from './_request';

/**
 * Сохранение оценки
 * 
 * @param {Object} params
 * @returns {Function}
 */

const score = `{id,value,user{id,name,main_image,karma},comment{text,id,useful,useless,updated_at}}`;

export function save(params) {
   
    if ("comment" in params) {
	let comment = params.comment.replace(/(?:\r\n|\r|\n)/g, '\n');
	params.comment = `""${comment}""`;
    }   

    let conditions = getConditions(params);
    let query = `mutation {createScore${conditions}${score}}`;
    return request(query);
}

/**
 * Получение оценок
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function find(params) {
    if (!('limit' in params)) {
	params.limit = 10;
    }
    let conditions = getConditions(params);
    let query =  `{scores${conditions}${score}}`; 
    return request(query);
}


