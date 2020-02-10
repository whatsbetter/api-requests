import { getConditions as t } from './_util';
import fragments from './_fragments';




/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {  
    params.preset = params.preset || false;
    
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
                name, 
                main_image
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
                main_image
            }, 
            updated_at,
            sphere {
                ${ fragments.sphere }
            }
            metadata {
                criteria {
                    id,
                    label
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
            preamble, 
            preamble_images {
                hash
            }, 
            sphere {
                id,
                label
            }, 
            sphere {
                ${ fragments.sphere }, 
            }
            ${ fragments.presetMetadata },
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
   
    return `
        mutation {createPost ${ t(params) } {
            id
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
    params.title = params.title.replace(/\\([\s\S])|(")/g,'\\$1$2');
    
    return `
        mutation {updatePost ${ t(params) } {
            id, 
            title
        }
    }`;
}