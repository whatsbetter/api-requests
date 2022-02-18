import t from 'api-helpers/toGqlParams';
import { renderFragments } from './_fragments';

/**
 * Сфера с полной детализацией
 */
const sphereFields = `
    id
    name
    description
    label
    mainImage
    countSpheres
    countCriteria
    countProperties
    countEntities
    countScores
    countSubscribers
    countPresets
    countPosts
    sharingDescription
    subscribed
    popularCriteria {
        name
        id
        label
    }`;

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
            count
            spheres {
                id
                name
                label
                countEntities
                countCriteria
                countSpheres
                countScores
                mainImage
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
export function findAll(params, fragments) {
    params.limit = params.limit || 20;
    params.hide = false;
    

    return `
        {spheres ${ t(params) } {
            name
            id
            label
            mainImage
            countScores
            countCriteria
            countSpheres
            countEntities
            countSubscribers
            subscribed
            ${ renderFragments(fragments) }
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
export function findRoot(params) {
    params.limit = params.limit || 20;

    return `
        {rootSpheres ${ t(params) } {
            name
            id
            label
            mainImage
            countSpheres
            countEntities
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
export function findById(params, fragments) {
    return `
        {sphere(id: "${params.id}"){
            ${ sphereFields }
            ${ renderFragments(fragments) }
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
            ${ sphereFields }
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
            ${ sphereFields }
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
                id
                name
                label
                mainImage
                countCriteria
                countEntities
                countScores
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
            name
            label
            mainImage
            countScores
        }
    }`;
}

/**
 * Получить сферы, на которые подписан пользователь
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findMySpheres(params) {
    return `
        {mySpheres ${ t(params) } {
            id
            name
            description
            label
            mainImage
            countCriteria
            countSpheres
            countEntities
            countScores
            subscribed
        }
    }`;
}