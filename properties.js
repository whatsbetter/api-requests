import { getConditions } from './_util';

/**
 * Получение свойств сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {
    params.limit = 100;
    let conditions = getConditions(params);
    return `{properties${conditions}{id,name,label,kind,filterable,enriched,hide_on_entity,items{id,label,name}}}`;
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
    return `{properties_value${conditions}{property_id,kind,enriched,value}}`;
}

export function findByType(type, params) {
    let conditions = getConditions(params);
    return `{property_${type}${conditions}{id,name,label}}`;
}



