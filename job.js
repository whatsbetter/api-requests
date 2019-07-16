import { getConditions as t } from './_util';
const fragments = {};


fragments.jobRequest = `
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
        balance {
            status
        }
    }
`
/**
 * Найти все заявки на работу 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findById(params) { 
    return `{
        jobRequest ${ t(params) }  {
            ${fragments.jobRequest}
        }
    }`;
}

/**
 * Найти все заявки на работу 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findAll(params) { 
    return `{
        jobRequests ${ t(params) }  {
            ${fragments.jobRequest}
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
