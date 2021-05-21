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

// replies {
//     text,
//     autor {
//         id,
//         name,
//         mainImage,
//         karma
//     }
// },
fragments.score = `{
    id,
    value,
    createdAt,
    sphere{
        id,
        name,
        label,
        mainImage
    },
    criterion {
        id,
        label
    },
    entity {
        id,
        label,
        mainImage
    },
    user {
        id,
        name,
        mainImage,
        karma
    },
    gallery {
        id,
        countMedia,
        items {
            type
            hash,
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

export function findTops(params) {
    return `
        {topScores ${ t(params) } { 
            value
            place
            argument
            entity {
                id
                mainImage
                label
            }
            criterion {
                id
                label
            }
            sphere {
                id
                label
            }
        }
    }`; 
}

export function getStatistic(params) {
    return ` 
        {scoresStatictic ${ t(params) } {
            roundedValue
            count
        }
    }`; 
}
