import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';

/**
 *  Создать комментарий
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {
    let text = params.text.replace(/(?:\r\n|\r|\n)/g, '\n');
    params.text = `""${text}""`;
    
    return `
        mutation {createComment ${ t(params) } {
            id, 
            text, 
            autor {
                id,
                name, 
                mainImage, 
                karma
            }
        }
    }`;

}


/**
 *  Получить все аргументы оценки
 * 
 * @param {Object} params
 * @returns {String}
 */
export function getByScore(params) {
    return `
        {comments ${ t(params) } {
            id,
            text,
            autor {
                id,
                name,
                mainImage,
                karma
            }
        }
    }`;
}


/**
 *  Изменить полезность
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function changeUseful(params, options) {    
    let type = options.type === 'minus' ? 'uselessComment' : 'usefulComment';

    return `
        mutation {${type} ${ t(params) } {
            id,
            useful,
            useless
        }
    }`;
}

/**
 * Пользователи, которые положительно оценили комментарий 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function getUsefulUsers(params) {
    return `
        {getUsefulUsersComment ${ t(params) } 
            ${ fragments.user }
        }`;
}

/**
 * Пользователи, которые отрицательно оценили комментарий 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function getUselessUsers(params) {
    return `
        {getUselessUsersComment ${ t(params) } 
            ${ fragments.user }
        }`;
}