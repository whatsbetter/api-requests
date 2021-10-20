import t from 'api-helpers/toGqlParams';

/**
 * Получение групп свойств
 * 
 * @param {Object} params
 * @returns {String}
 */
 export function getPropertyItems(params) {
    return `
        {propertyItems ${ t(params) } {
            id
            label
        }
    }`;
}