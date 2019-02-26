import { getConditions as gc } from './_util';
import request from './_request';

/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */
const chat = '{id,label,main_image,read,criteria{id, label},sphere{id,name},status,users(limit: 4){id,name,main_image},last_message{text,user{id,name,main_image}}}';

export function findAll(params) {  
    params.limit = params.limit || 20;
    
    let query = `{chats${gc(params)}${chat}}`;
    return request(query);
}

/**
 * Найти чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findById(params) {   
    let query = `{chat${gc(params)}{id, users(limit:20){id,name,main_image}}}`;
    return request(query);
}


/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function create(params) {
    let query = `mutation {createChat${gc(params)}${chat}}`;
    return request(query);
}

/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function setRead(params) {
    let query = `mutation {readChat${gc(params)}}`;
    return request(query);
}


 
