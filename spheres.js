import { getConditions as t } from './_util';
import fragments from './_fragments';


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
            main_image,
            count_scores,
            count_criteria,
            count_entities
            subscribed
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
            ${fragments.sphere}
            ${'fragments' in options ? options.fragments.map(key => fragments[key]).join(',') : ''}      
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


/**
 * Связанные сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findLinkedSpheres(params) {
    return `{
        spheres_spheres ${ t(params) } {
            id
            kind
            s_sphere {
                id,
                icon,
                name,
                label,
                count_criteria,
                count_entities,
                count_scores,
            }
        }
    }`;
}