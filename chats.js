import { getConditions } from './_util';
import request from './_request';

/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */
const chat = '{id,label,main_image,users(limit: 4){id,name},last_message{text,user{id,name,main_image}}}';

export function findAll(params) {  
    let conditions = getConditions(params);  
    let query = `{chats${conditions}${chat}}`;
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
    let query = `mutation {createChat${conditions}${chat}}`;
    return request(query);
}
