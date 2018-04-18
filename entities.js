import { getConditions } from './_util';

/**
 * Ранжирование объектов
 * 
 * @param {type} params
 * @returns {String}
 */
export function findAll(params) {    
    params.limit = params.limit || 10;
    params.typeOfSerp = "rating";
    
    let conditions = getConditions(params);
    
    return `{entities ${conditions} {id, name, main_image, label, avg, avg_scores {value, criteria_id}, current_user_scores {criteria_id, comment, value}}}`;
}