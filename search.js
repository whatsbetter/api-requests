import { getConditions } from './_util';
import request from './_request';

/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */


export function execute(params) {  
    let conditions = getConditions(params);  
    let query = `{search${conditions}{text,data,subtitle}}`;
    return request(query);
}

