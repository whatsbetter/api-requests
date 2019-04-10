import { getConditions } from './_util';

const user = '{id,name,main_image,karma,providers{type}}}';

const user_page = '{id,name,first_name,second_name,main_image,karma,providers{type},' +
    'karma_details{sphere{id,label,name},value,count_scores,count_useless,count_useful}}}';

/**
 * Найти текущего пользователя по токену
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findById(params) {
    let conditions = getConditions(params); 
    return `{user${conditions}${user_page}`;
}


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
    return `{users${conditions}{id,name,main_image}}`;
}


/**
 * Поиск пользователей статистика НАДО ПЕРЕНЕСТИ В АДМИНКУ НО Я НЕ ЗНАЮ КАК
 *
 * @param {Object} params
 * @returns {Function}
 */
export function findAllPage(params) {
    if (!('limit' in params)) {
        params.limit = 20;
    }
    let conditions = getConditions(params);
    return `{users${conditions}{id,name,first_name,second_name,main_image,karma,created_at,providers{type,p_id}}}`;
}


/**
 * Поиск пользователей по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    return `{search(text:"${params.text}",type:"users"){id,data,text}}`;
}

/**
 * Найти текущего пользователя по токену
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findMe(params) {
    return `{user (token: "${params.token}")${user}`;
}

/**
 * Добавить подписку на сферу
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function addSubscriptionToSphere(params) {
    let conditions = getConditions(params);
    return `mutation {addSubscriptionForSpheres${conditions}{id,name,label,icon}}`;
}

/**
 * Удалить подписку на сферу
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function removeSubscriptionToSphere(params) {
    let conditions = getConditions(params);
    return `mutation {removeSubscriptionForSpheres${conditions}{id}}`;
}

/**
 * Получить сферы на которые подписан
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findSubscriptionSpheres(params) {
    let conditions = getConditions(params);
    return `{subscription_spheres${conditions}{id,name,icon,label,count_scores,count_criteria,count_entities}}`;
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
    return `{friends${conditions}{id,name,phone,first_name,second_name,main_image}}`;
}

export function getPartners() {
    return `{get_partners_users{id,name,phone,main_image}}`;
}

