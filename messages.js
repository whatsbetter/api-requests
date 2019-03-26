import { getConditions } from './_util';

/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Function}
 */

const message = `{
    id,
    text,
    user {
        id,
        name,
        main_image
    }, 
    rating{
        id,
        label,
        name,
        avg,
        main_image,
        avg_scores {
            value,
            count_scores,
            criteria {
                label,
                id
            }
        }
    }, 
    created_at
}}`;


export function findAll(params) {  
    let conditions = getConditions(params);  
    return `{messages${conditions}${message}`;
}

/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function create(params) {
    let conditions = getConditions(params);
    return `mutation {sendMessage${conditions}${message}`;
}
