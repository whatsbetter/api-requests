import t from 'api-helpers/toGqlParams';
const fragments = {};

fragments.post = `
    id,
    title, 
    alias, 
    published, 
    preamble, 
    preambleImages {
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
        mainImage,
        karma
    }, 
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
        {posts ${ t(params) } {
            ${ fragments.post }
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
            content,
            ${ fragments.post }
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
            ${ fragments.post }
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
            ${ fragments.post }
        }
    }`;
}