import t from 'api-helpers/toGqlParams';
const fragments = {};

fragments.preset = `
    id,
    name, 
    label, 
    description, 
    main_image, 
    criteria {
        id,
        label
    }, 
    users {
        id,
        name
        main_image
    }, 
    filters{
        id
        label
        value
        op,
        items {
          id
          label
        }
    }
    sphere {
        label, 
        name, 
        id
    }, 
    author {
        id,
        name, 
        main_image,
        karma
    }, 
    created_at
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
            main_image,
            sphere {
                id
            }
        }
    }`;
}

/**
 * Обновление поста
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
            main_image,
            sphere {
                id
            }
        }
    }`;
}


/**
 * Добавить критери к посту
 * 
 * @param {Object} params
 * @returns {String}
 */
export function addCriteria(params) { 
    return `
        mutation {addCriteriaToPreset ${ t(params) } {
            id, 
        }
    }`;
}

/**
 * Удалить критерии к посту
 * 
 * @param {Object} params
 * @returns {String}
 */
export function removeCriteria(params) { 
    return `
        mutation {removeCriteriaFromPreset ${ t(params) } {
            id, 
        }
    }`;
}

/**
 * Удалить пользователей к посту
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


    
    
    
