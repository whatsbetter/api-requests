import { getConditions } from './_util';
import request from './_request';

/**
 * Сохранение оценки
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function save(params) {
    let conditions = getConditions(params);
    let query = `mutation {createScore${conditions}{id, value, user {id, name, main_image}, comment {text, id}}}`;
    return request(query);
}

/**
 * Получение оценок
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findByObjectCriterion(params) {
    let conditions = getConditions(params);
    let query =  `{scores${conditions}{value, user{id,name,main_image}, comment {text,id}}}`; 
    return request(query);
}


