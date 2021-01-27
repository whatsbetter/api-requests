import t from 'api-helpers/toGqlParams';
const fragments = {};

// useful,
// useless,
// gallery {
//     id, 
//     items {
//         id,
//         hash,
//         type,
//         url
//     }
// }
// updated_at
//count_sub_comments,
fragments.score = `{
    id,
    value,
    created_at,
    sphere{
        id,
        name,
        label,
        main_image
    },
    criterion {
        id,
        label
    },
    entity {
        id,
        label,
        main_image
    },
    user {
        id,
        name,
        main_image,
        karma
    },
    replies {
        text,
        autor {
            id,
            name,
            main_image,
            karma
        }
    },
    argument 
}`;

/**
 * Сохранение оценки
 * 
 * @param {Object} params
 * @returns {String}
 */
export function save(params) {
    if ('argument' in params) {
        let argument = params.argument.replace(/(?:\r\n|\r|\n)/g, '\n');
        params.argument = `""${argument}""`;
    }   
        
    return `
        mutation {createScore ${ t(params) } 
            ${fragments.score}
        }`;
}


/**
 * Получение оценок
 * 
 * @param {Object} params
 * @returns {String}
 */
export function find(params) {
    params.limit = params.limit || 10;
    
    return `
        {scores ${ t(params) }
            ${fragments.score}
        }`; 
}


/**
 * Получение оценки по идентификатору
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findById(params) {
    return `
        {score ${ t(params) } 
            ${fragments.score}
        }`; 
}




