import t from 'api-helpers/toGqlParams';
const fragments = {};


/**
 * Получение всех картинок
 * 
 * @param {Object} params
 * @returns {Stting}
 */
export function findAll(params) {  
    return `
        query {pictures ${ t(params) } {
            id, 
            hash, 
            user_id
        }
    }`;
}


/**
 * Сохранение картинки
 * 
 * @param {Object} params
 * @returns {Stting}
 */
export function save(params) {  
    return `
        mutation {createPicture ${ t(params) } {
            id, 
            hash, 
            user_id
        }
    }`;
}
