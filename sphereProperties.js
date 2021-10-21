import t from 'api-helpers/toGqlParams';
import { renderFragments } from './_fragments';

/**
 * Получение свойств сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params, fragments) {
    params.limit = 100;

    return `
        {sphereProperties ${ t(params) } {
            id
            propertyID
            label
            kind
            associatedSphereID
            itemsType
            units
            min
            max
            ${ renderFragments(fragments) }
        }
    }`;
}

/**
 * Получение групп свойств
 * 
 * @param {Object} params
 * @returns {String}
 */
export function getGroups(params) {
    return `
        {propertiesGroups ${ t(params) } {
            id
            name
            label
        }
    }`;
}

/**
 * Создать свойство
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {
    return `
        mutation {createProperty ${ t(params) } {
            id
            name
            kind
            label
        }
    }`;
}

/**
 * Обновить свойство
 * 
 * @param {Object} params
 * @returns {String}
 */
export function update(params) {
    return `
        mutation {updateProperty ${ t(params) } {
            id
            name
            kind
            label
        }
    }`;
}





