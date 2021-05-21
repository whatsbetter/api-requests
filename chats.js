import t from 'api-helpers/toGqlParams';
const fragments = {};


fragments.chat = `{
    id,
    label,
    mainImage,
    read,
    criteria {
        id, 
        label
    },
    sphere{
        id,
        name
    },
    status,
    users (limit: 4) {
        id,
        name,
        mainImage
    },
    last_message {
        text,
        user {
            id,
            name,
            mainImage
        }
    }
}`;


/**
 * Получение всех чатов
 * 
 * @param {Object} params
 * @returns {Stting}
 */
export function findAll(params) {  
    params.limit = params.limit || 20;
    
    return `
        {chats ${ t(params) }
            ${ fragments.chat }
    }`;
}

/**
 * Найти чат
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String} 
 */
export function findById(params, options = {}) {   
    let usersLimit = 'usersLimit' in options ? options.usersLimit : 20;
    
    return `
        {chat ${ t(params) } {
            id, 
            label, 
            users(limit: ${ usersLimit }){
                id,
                name,
                mainImage
            },
            sphere{
                id, 
                name, 
                label
            },
            criteria{
                id,
                label
            }
        }
    }`;
}


/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function create(params) {
    return `
        mutation {createChat ${ t(params) }
                ${fragments.chat}
        }`;
}

/**
 * Создать чат
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function setRead(params) {
    return `mutation {readChat ${ t(params) }}`;
}