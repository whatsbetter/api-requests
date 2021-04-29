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
            count_media
            items {
                id
                hash
                url
                type
            }
        }
    }`;
}