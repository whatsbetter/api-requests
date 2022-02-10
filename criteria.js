import t from 'api-helpers/toGqlParams';
import { renderFragments } from './_fragments';




/**
 * Поиск критериев по имени 
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function search(params) {
    params.type = 'criteria';

    return `{
        search ${ t(params) } {
            count,
            criteria {
                id,
                label
            }
        }
    }`;
}


/**
 * Найти критерий по идентификатору
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findById(params) {
    return `
        {criterion ${ t(params) } {
            id
            name
            label
            description
            hide
            criterionGroups {
                id
                name
                label
            }
        }
    }`;
}


/**
 * Найти все критерии
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findAll(params, fragments) {
    params.hide = false;
    
    return `
        {criteria ${ t(params) } {
            id
            name
            label
            description
            countScores
            ${ renderFragments(fragments) }
        }
    }`;
}


/**
 * Найти все группы
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findGroups (params, fragments) {
    return `
        {criteriaGroups ${ t(params) } {
            id
            name
            label
            countCriteria
            ${ renderFragments(fragments) }
        }
    }`;
}


/**
 * Найти все критерии группы
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findFromGroups(params, fragments) {
    return `
        {criteriaGroup ${ t(params) } {
            id
            name
            label
            countCriteria
            ${ renderFragments(fragments) }
        }
    }`;
}


/**
 * Создание критерия
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function create(params) {
    return  `
        mutation {createCriteria ${ t(params) } {
            id,
            name,
            label,
            description
        }
    }`;
}


/**
 * Обновление критерия
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function update(params) {
    return `
        mutation {updateCriteria ${ t(params) } {
            id,
            name,
            label,
            description
        }
    }`;
}

export function getUsersCriteria(params) {
    return `
        {usersCriteria ${ t(params) } {
            id
            name
            label
            countScores
        }
    }`;
}