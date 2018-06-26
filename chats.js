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
    let query = `{chats${conditions}{id,label,main_image,users(limit: 4){id,name},last_message{text,user{id,name,main_image}}}}`;
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
    let query = `mutation {createChat${conditions}{id}}`;
    return request(query);
}
