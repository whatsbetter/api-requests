import { getConditions } from './_util';
import request from './_request';


/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function create(params) {
    let conditions = getConditions(params);
    let query = `mutation {createChat${conditions}{id}`;
    return request(query);
}
