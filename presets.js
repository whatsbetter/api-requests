import t from 'api-helpers/toGqlParams';
const fragments = {};

fragments.preset = `
    id
    name
    label
    description 
    mainImage
    withGivenEntities
    criteria {
        id
        label
    }, 
    users {
        id
        name
        mainImage
    }, 
    filters{
        id
        label
        value
        op
        items {
            id
            label
        }
    }
    sphere {
        label
        name 
        id
    }, 
    author {
        id
        name 
        mainImage
        karma
    }
    createdAt
`;


/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {  
    
    return `
        {presets ${ t(params) } {
            ${ fragments.preset }
        }
    }`;
}

/**
 * Поиск поста по синониму
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findById(params) {           
    return `
        {preset ${ t(params) } {
            ${ fragments.preset }
        }
    }`;
}

/**
 * Создание пресета
 * 
 * @param {type} params
 * @returns {String}
 */
export function create(params) {
    // if ('description' in params) {
    //     params.description = escape(params.description)
    // }
   
    return `
        mutation {createPreset ${ t(params) } {
            id,
            name,
            label,
            description,
            mainImage,
            sphere {
                id
            }
        }
    }`;
}

/**
 * Обновление персета
 * 
 * @param {type} params
 * @returns {String}
 */
export function update(params) {
    // if ('title' in params) {
    //     params.title = params.title.replace(/\\([\s\S])|(")/g,'\\$1$2');
    // };
    
    return `
        mutation {updatePreset ${ t(params) } {
            id,
            name,
            label,
            description,
            mainImage,
            sphere {
                id
            }
        }
    }`;
}


/**
 * Добавить критерии к пресету
 * 
 * @param {Object} params
 * @returns {String}
 */
export function addCriteria(params) { 
    return `
        mutation {addCriteriaToPreset ${ t(params) } {
            id
        }
    }`;
}

/**
 * Удалить критерии из поста
 * 
 * @param {Object} params
 * @returns {String}
 */
export function removeCriteria(params) { 
    return `
        mutation {removeCriteriaFromPreset ${ t(params) } {
            id
        }
    }`;
}

/**
 * Добавить критерии к пресету
 * 
 * @param {Object} params
 * @returns {String}
 */
export function addEntities(params) { 
    return `
        mutation {addEntitiesToPreset ${ t(params) } {
            id
        }
    }`;
}

/**
 * Удалить критерии из поста
 * 
 * @param {Object} params
 * @returns {String}
 */
export function removeEntities(params) { 
    return `
        mutation {removeEntitiesFromPreset ${ t(params) } {
            id
        }
    }`;
}

/**
 * Удалить пользователей из поста
 * 
 * @param {Object} params
 * @returns {String}
 */
export function removeUser(params) { 
    return `
        mutation {removeUserFromPreset ${ t(params) } {
            id, 
        }
    }`;
}