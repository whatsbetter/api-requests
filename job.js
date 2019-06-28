import { getConditions as t } from './_util';


/**
 * Найти все заявки на работу 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findAll(params) { 
    return `{
        jobRequests ${ t(params) }  {
            id
            status,
            comment,
            mentor {
                id
                name
                main_image
            }
            apprentice {
                id
                name,
                main_image,
                phone,
                balance{
                    value
                    id
                }
            }
        }
    }`;
}


/**
 * Создание заявки
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function create(params) {
    return `
        mutation {createJobRequest ${ t(params) } {
            id,
            apprentice {
                id
                name
                phone
            }
        }
    }`;
}


/**
 * Обновление заявки
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function update(params) {
    return `
        mutation {changeJobRequest ${ t(params) } {
            id,
            status
        }
    }`;
}
