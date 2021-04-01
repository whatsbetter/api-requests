import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';


/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {  
    
    return `
        {presets ${ t(params) } {
            id,
            name, 
            label, 
            description, 
            main_image, 
            criteria {
                id,
                label
            }, 
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
        }
    }`;
}

/**
 * Поиск поста по синониму
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findByAlias(params) {           
    return `
        {post ${ t(params) } {
            id, 
            alias, 
            title, 
            content, 
            published, 
            preamble,  
            preamble_images {
                hash
            }, 
            author {
                id,
                name, 
                main_image,
                karma
            }, 
            updated_at,
            sphere {
                ${ fragments.sphere }
            },
            metadata {
                criteria {
                    id,
                    label
                },
                filters,
                users {
                    id,
                    name,
                    main_image,
                    karma
                }
            }
        }
    }`;
}

/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findPresets(params) { 
    params.preset = true;
    
    return `
        {posts ${ t(params) } {
            id,
            title,
            alias,
            preamble, 
            preamble_images {
                hash
            }, 
            sphere {
                ${ fragments.sphere }
            },
            metadata {
                criteria {
                    id,
                    label
                },
                users {
                    id,
                    name,
                    main_image,
                    karma
                }
            }
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
            sphere {
                id
            },
            name,
            label,
            description,
            main_image
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
    if ('title' in params) {
        params.title = params.title.replace(/\\([\s\S])|(")/g,'\\$1$2');
    };
    
    return `
        mutation {updatePost ${ t(params) } {
            id, 
            title,
            sphere {
                ${ fragments.sphere }
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
        mutation {addCriteriaToPosts ${ t(params) } {
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
        mutation {removeCriteriaFromPosts ${ t(params) } {
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
        mutation {removeUserFromPosts ${ t(params) } {
            id, 
        }
    }`;
}


    
    
    
