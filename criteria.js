import { getConditions } from './_util';
import request from './_request';

/**
 * Найти все критерии
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findAll(params) {
    let conditions = getConditions(params);
    let query = `{criteria${conditions}{id,name,label}}`;
    return request(query);
}
