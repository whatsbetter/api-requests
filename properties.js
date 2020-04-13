import { getConditions as t } from './_util';


/**
 * Получение свойств сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {
    params.limit = 100;

    return `
        {properties ${ t(params) } {
            id,
            name,
            label,
            kind,
            filterable,
            enriched,
            hide_on_entity,
            items {
                id,
                label,
                name
            }
        }
    }`;
}

/**
 * Получение свойств сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findById(params) {

    return `
        {property ${ t(params) } {
            id,
            name,
            label,
            kind,
            filterable,
            enriched,
            hide_on_entity,
            items {
                id,
                label,
                name
            }
        }
    }`;
}


/**
 * Получение свойств объекта
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findByEntity(params) {
    params.limit = 100;
    
    return `
        {properties_value ${ t(params) } { 
            property_id,
            kind,
            enriched,
            value
        }
    }`;
}


/**
 * Получение свойств по типу
 * 
 * @param {String} type
 * @param {Object} params
 * @returns {String}
 */
export function findByType(type, params) {
    return `
        {property_${type} ${ t(params) } { 
            id,
            name,
            label
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
        {groups_properties ${ t(params) } {
            name,
            label,
            id
        }
    }`;
}





