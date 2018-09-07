import { getConditions } from './_util';
import request from './_request';


/**
 * Поиск пользователей
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findAll(params) {
    if (!('limit' in params)) {
        params.limit = 20;
    }
    let conditions = getConditions(params); 
    let query = `{users${conditions}{id,name,main_image}}`;
    return request(query);
}


/**
 * Поиск пользователей по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    let query = `{search(text:"${params.text}",type:"users"){id,data,text}}`;
    return request(query);
}

/**
 * Найти текущего пользователя по токену
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findMe(params) {
    let query =`{user (token: "${params.token}"){id,name,first_name,second_name,main_image,karma,providers{type}}}`;
    return request(query);
}

/**
 * Добавить подписку на сферу
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function addSubscriptionToSphere(params) {
    let conditions = getConditions(params);
    let query =`mutation {addSubscriptionForSpheres${conditions}{id,name,label}}`;
    return request(query);
}

/**
 * Удалить подписку на сферу
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function removeSubscriptionToSphere(params) {
    let conditions = getConditions(params);
    let query =`mutation {removeSubscriptionForSpheres${conditions}{id}}`;
    return request(query);
}

/**
 * Получить сферы на которые подписан
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findSubscriptionSpheres(params) {
    let conditions = getConditions(params);
    let query =`{subscription_spheres${conditions}{id,name,icon,label,count_scores,count_criteria,count_entities}}`;
    return request(query);
}


/**
 * Поиск друзей
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findFriends(params) {
    if (!('limit' in params)) {
        params.limit = 20;
    }
    let conditions = getConditions(params); 
    let query = `{friends${conditions}{id,name,first_name,second_name,main_image}}`;
    return request(query);
}
