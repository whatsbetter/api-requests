import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';


/**
 * Поиск сфер по имени
 * 
 * @param {Object} params
 * @returns {String}
 */
export function search(params) {
    params.type = 'spheres';

    return `
        {search ${ t(params) } {
            count,
            spheres {
                id,
                name,
                label,
                countEntities,
                countCriteria,
                countScores,
                mainImage,
            }
        }
    }`;
}

/**
 * Получение всех сфер
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function findAll(params, options={}) {
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
            mainImage,
            countScores,
            countCriteria,
            countEntities
            subscribed,
            ${'fragments' in options ? options.fragments.map(key => fragments[key]).join(',') : ''} 
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
    }`;
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
           ${fragments.sphere}
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
        mutation { updateSphere ${ t(params) } {
           ${fragments.sphere}
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
        linkedSpheres ${ t(params) } {
            id
            childSphere {
                id,
                icon,
                name,
                label,
                mainImage,
                countCriteria,
                countEntities,
                countScores,
            }
        }
    }`;
}

/**
 * Связанные сферы
 * 
 * @param {Object} params
 * @returns {String}
 */
 export function findRatedSpheres(params) {
    return `{
        ratedSpheres ${ t(params) } {
            id
            name,
            label,
            mainImage,
            countScores,
        }
    }`;
}

/**
 * Получить сферы, на которые подписан пользователь
 * 
 * @param {Object} params
 * @returns {String} 
 */
 export function findSubscriptionSpheres(params) {
    return `
        {subscriptionSpheres ${ t(params) } {
            id,
            name,
            description,
            label,
            mainImage,
            countCriteria,
            countEntities,
            countScores
        }
    }`;
}