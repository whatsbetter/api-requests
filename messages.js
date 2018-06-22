import { getConditions } from './_util';
import request from './_request';

/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {  
    let conditions = getConditions(params);  
    let query = `{messages ${conditions}{id,text,created_at}}`;
    return request(query);
}

/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function create(params) {
    let conditions = getConditions(params);
    let query = `mutation {sendMessage${conditions}{id, text}}`;
    return request(query);
}
