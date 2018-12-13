import { getConditions } from './_util';
import request from './_request';

/**
 * Получить поток
 * 
 * @param {Object} params
 * @returns {Function}
 */

export function get(params) {  
    let conditions = getConditions(params);  
    let query = `{notifications${conditions}{status,comment {parent_score{id, comment{text,updated_at}, value},text,entity{id,label,main_image},autor{id,name,main_image,karma}, criteria{id,label}, sphere{id,name,label}}, routing_key, kind}}`;
    return request(query);
}

export function getCount() {   
    let query = `{notifications_count(status: "new")}`;
    return request(query);
}

export function setStatus(params) {  
    params.status = 'read';
    let conditions = getConditions(params);  
    let query = `mutation{updateNotification${conditions}}`;
    return request(query);
}