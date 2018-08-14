import { getConditions } from './_util';
import request from './_request';

/**
 * Получение свойств сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {
    params.limit = 100;
    let conditions = getConditions(params);
    let query = `{properties${conditions}{id,name,label,kind,hide_on_entity,items{name,id}}}`;
    return request(query);
}

/**
 * Получение свойств объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findByEntity(params) {
    params.limit = 100;
    let conditions = getConditions(params);
    let query = `{properties_value${conditions}{property_id,kind,value}}`;
    return request(query);
}
