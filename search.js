import { getConditions } from './_util';


/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function execute(params) {  
    let conditions = getConditions(params);  
    return `{search${conditions}{text,data,subtitle}}`;
}

