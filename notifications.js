import { getConditions } from './_util';

/**
 * Получить поток
 * 
 * @param {Object} params
 * @returns {Function}
 */

export function get(params) {  
    let conditions = getConditions(params);  
    return `{notifications${conditions}{status,comment {parent_score{id, comment{text,updated_at}, value},text,entity{id,label,main_image},autor{id,name,main_image,karma}, criteria{id,label}, sphere{id,name,label}}, routing_key, kind}}`;
}

export function getCount() {   
    return `{notifications_count(status: "new")}`;
}

export function setStatus(params) {  
    params.status = 'read';
    let conditions = getConditions(params);  
    return `mutation{updateNotification${conditions}}`;
}