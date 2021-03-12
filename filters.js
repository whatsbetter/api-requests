import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';

/**
 * Детализация фильтров
 * 
 * @param {Object} params
 * @returns {String}
 */
 export function getDetails(params) {   
    
    return `
        { getFiltersDetails ${ t(params) } {
            id,
            label,
            op,
            kind,
            units,
            value,
            items {
                id,
                label
            }
        }
    }`;
}