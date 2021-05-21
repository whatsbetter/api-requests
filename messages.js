import t from 'api-helpers/toGqlParams';
const fragments = {};


fragments.message = `{
    id,
    text,
    user {
        id,
        name,
        mainImage
    }, 
    rating {
        id,
        label,
        name,
        avg,
        mainImage,
        avgScores {
            value,
            countScores,
            criteria {
                label,
                id
            }
        }
    }, 
    createdAt
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
