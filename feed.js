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
    let query = `{feed {created_at,end,start,scores{criterion{id,label},comment{id,text},entity{id,label,main_image},value},user{name,main_image,karma}}}`;
    return request(query);
}