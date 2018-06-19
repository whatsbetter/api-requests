import { getConditions } from './_util';
import request from './_request';

/**
 * Поиск объектов по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    params.type = 'entities';
    
    let conditions = getConditions(params);
    let query = `{search${conditions}{id,data,text}}`;
    
    return request(query);
}


/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {    
    params.limit = params.limit || 10;
    
    if ('criteria' in params) {
	params.typeOfSerp = "rating";
    }

    if ('filter' in params) {
	if (Object.keys(params.filter).length > 0) {
	    params.filter = JSON.stringify(params.filter).replace(/"/g, "'");  
	}
    }
 

    let conditions = getConditions(params);
    let query = `{entities${conditions}{id,name,main_image,label,avg,properties{kind,value,property_id}count_scores,avg_scores{value,criteria_id},current_user_scores{criteria_id,comment,value}}}`;
    return request(query);
}