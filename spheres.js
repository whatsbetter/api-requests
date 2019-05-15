import { getConditions as t } from './_util';
const fragments = {};


fragments.accociatedProperties = `
    accociated_properties {
        label,
        id,
        sphere{
            id,
            name,
            label,
            description,
            icon,
            popular_criteria{
               id
               label
            }
        }
    }`;

/**
 * Поиск сфер по имени
 * 
 * @param {Object} params
 * @returns {String}
 */
export function search(params) {
    return `
        {search(text:"${params.text}",type:"spheres") {
            id,
            data,
            text,
            subtitle
        }
    }`;
}

/**
 * Получение всех сфер
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {
    params.limit = params.limit || 20;
    params.hide = false;
    
    if (!('parent' in params) && !('type' in params)) {
        params.orderBy = 'popular';
    }

    return `
        {spheres ${ t(params) } {
            name,
            id,
            icon,
            label,
            have_child,
            count_scores,
            count_criteria,
            subscribed,
            count_entities
        }
    }`;
}


/**
 * Получение сферы по идентификатору
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function findById(params, options = {}) {
    return `
        {sphere(id: "${params.id}"){
            name,
            id,
            description,
            label,
            count_criteria,
            count_entities,
            have_map,
            sharing_description,
            count_scores,
            popular_criteria{
                name,
                id,
                label
            },
            ${'sections' in options ? options.sections.map(key => fragments[key]).join(',') : ''}      
        }
    }
`;
}


/**
 * Создание сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {
    return `
        mutation { createSphere ${ t(params) } {
            id,
            name,
            label
        }
    }`;
}


/**
 * Обновление сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function update(params) {
    return `
        mutation {updateSphere ${ t(params) } { 
            id,
            name,
            label
        }
    }`;
}