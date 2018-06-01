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
    let conditions = getConditions(params);
    let query =  `{scores${conditions}${score}}`; 
    return request(query);
}


