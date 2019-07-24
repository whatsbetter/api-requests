import { getConditions as t } from './_util';
const fragments = {};


fragments.metadata = `
    metadata {
        criteria {
            id,
            label
        }, 
        scores {
            id, 
            criterion {
                id, 
                label
            }, 
            entity{ 
                id, 
                label, 
                main_image
            }, 
            value,
            user {
                name, 
                main_image
            }
        }
        rating {
            id,
            name,
            main_image,
            label,
            avg,
            properties {
                id,
                kind,
                popular,
                value,
                label
            }
            prices {
                id, 
                value, 
                marketplace { 
                    id, 
                    name, 
                    label
                }
            }
            
            video {
                url
            },
            avg_scores{
                value,
                count_scores,
                criteria_id
            } 
        }
    }`;

fragments.sphere = `
    sphere {
        label, 
        name, 
        id,
        count_entities
        count_criteria,
        count_scores,
        job_request_access
    }
`;

/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {  
    params.preset = false;
    
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
            ${ fragments.sphere }, 
            ${ fragments.metadata },
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
            ${ fragments.sphere }, 
            ${ fragments.metadata },
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