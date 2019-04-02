import { getConditions as gc } from './_util';

/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */
const chat = '{id,label,main_image,read,criteria{id, label},sphere{id,name},status,users(limit: 4){id,name,main_image},last_message{text,user{id,name,main_image}}}';

export function findAll(params) {  
    params.limit = params.limit || 20;
    
    return `{chats${gc(params)}${chat}}`;
}

/**
 * Найти чат
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {Function} 
 */
export function findById(params, options = {}) {   
    let usersLimit = 'usersLimit' in options ? options.usersLimit : 20;
    return `{chat${gc(params)}{id, label, users(limit:${usersLimit}){id,name,main_image},sphere{id, name, label},criteria{id,label},}}`;
}


/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function create(params) {
    return `mutation {createChat${gc(params)}${chat}}`;
}

/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function setRead(params) {
    return `mutation {readChat${gc(params)}}`;
}


 
