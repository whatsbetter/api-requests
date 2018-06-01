import { getConditions } from './_util';
import request from './_request';

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
    let query =`{user (token: "${params.token}"){id,name,first_name,second_name,main_image,karma}}`;
    return request(query);
}

/**
 * Поиск друзей
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findFriends(params) {
    let conditions = getConditions(params); 
    let query = `{friends ${conditions} {id,name,first_name,second_name,main_image}}`;
    return request(query);
}
