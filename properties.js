import { getConditions } from './_util';
import request from './_request';

/**
 * Получение все свойств сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {
    let conditions = getConditions(params);
    let query = `{properties ${conditions} {id, name, label, kind, items{name, id}}}`;
    return request(query);
}
