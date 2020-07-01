import { getConditions as t } from './_util';
import fragments from './_fragments';




/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {  
    //params.preset = params.preset || false;
    
    return `
        {posts ${ t(params) } {
            id,
            title, 
            alias, 
            published, 
            preamble, 
            preamble_images {
                hash
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
            metadata {
                criteria {
                    id,
                    label
                }, 
            }
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
 * Создание поста
 * 
 * @param {type} params
 * @returns {String}
 */
export function create(params) {
    params.alias = params.alias || '';
    params.title = params.title.replace(/\\([\s\S])|(")/g,'\\$1$2');
    
    if ('filters' in params) {
        if (Object.keys(params.filters).length > 0) {
            params.filters = JSON.stringify(params.filters).replace(/"/g, '\'');  
        }
    }
   
    return `
        mutation {createPost ${ t(params) } {
            id,
            sphere {
                ${ fragments.sphere }
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
    
    
    
