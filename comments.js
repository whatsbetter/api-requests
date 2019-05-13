import { getConditions as t } from './_util';

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
                main_image, 
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
                main_image,
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