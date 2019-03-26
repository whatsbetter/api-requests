import { getConditions } from './_util';

/**
 * Поиск критериев по имени критерии
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function search(params) {
    params.type = 'criteria';
    
    let conditions = getConditions(params);
    return `{search${conditions}{id,data,text}}`;
}


/**
 * Найти все критерии
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findAll(params) {
    params.hide = false;
    let conditions = getConditions(params);
    return `{criteria${conditions}{id,name,label,criteria_group{id,name,label}}}`;
}

/**
 * Найти все группы
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findGroups(params) {
    let conditions = getConditions(params);
    return `{criteria_groups${conditions}{id,name,label,}}`;
}

/**
 * Найти все критерии группы
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findFromGroups(params) {
    let conditions = getConditions(params);
    return `{criteria_group${conditions}{id,name,label,criteria{id,name,label} }}`;
}





/**
 * Создание критерия
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function create(params) {
    let conditions = getConditions(params);
    let query = `mutation {createCriteria${conditions}{id,name,label}}`;
    return request(query);
}

/**
 * Обновление критерия
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function update(params) {
    let conditions = getConditions(params);
    let query = `mutation {updateCriteria${conditions}{id,name,label}}`;
    return request(query);
}
