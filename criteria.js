import { getConditions } from './_util';
import request from './_request';

/**
 * Поиск критериев по имени критерии
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function search(params) {
    params.type = 'criteria';
    
    let conditions = getConditions(params);
    let query = `{search${conditions}{id,data,text}}`;
    
    return request(query);
}


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
