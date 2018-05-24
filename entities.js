import { getConditions } from './_util';
import request from './_request';

/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {    
    params.limit = params.limit || 10;
    params.typeOfSerp = "rating";
    
    if ("filter" in params) {
	if (Object.keys(params.filter).length > 0) {
	    params.filter = JSON.stringify(params.filter).replace(/"/g, "'");  
	}
    }

    let conditions = getConditions(params);
    let query = `{entities ${conditions} {id, name, main_image, label, avg, avg_scores {value, criteria_id}, current_user_scores {criteria_id, comment, value}}}`;
    return request(query);
}