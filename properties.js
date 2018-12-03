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
    let query = `{properties${conditions}{id,name,label,kind,filterable,enriched,hide_on_entity,items{id,label,name}}}`;
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
    let query = `{properties_value${conditions}{property_id,kind,enriched,value}}`;
    return request(query);
}

export function findByType(type, params) {
    let conditions = getConditions(params);
    let query = `{property_${type}${conditions}{id,name,label}}`;
    return request(query);
}



