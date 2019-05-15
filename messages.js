import { getConditions as t } from './_util';
const fragments = {};


fragments.message = `{
    id,
    text,
    user {
        id,
        name,
        main_image
    }, 
    rating {
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
}`;


/**
 * Получение всех собщений в чате
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {   
    return `
        {messages ${ t(params) } 
            ${fragments.message}
        }`;
}

/**
 * Создать сообщение
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function create(params) {
    return `
        mutation {sendMessage ${ t(params) } 
            ${fragments.message}
        }`;
}
