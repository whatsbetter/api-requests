import t from 'api-helpers/toGqlParams';


/**
 * Получить галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {   
    return `
        {media ${ t(params) } {
            countMedia
            items {
                id
                hash
                url
                type
            }
        }
    }`;
}