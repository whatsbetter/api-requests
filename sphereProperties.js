import t from 'api-helpers/toGqlParams';
const fragments = {};

fragments.sphereProperty = `
    id,
    label,
    kind,
    associatedSphereID
    itemsType
    units,
    items {
        id,
        label,
        name
    }`;

/**
 * Получение свойств сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function get(params) {
    params.limit = 100;

    return `
        {sphereProperties ${ t(params) } {
            ${ fragments.sphereProperty }
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
            name,
            label,
            id
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
             ${ fragments.property }
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
             ${ fragments.property }
        }
    }`;
}





