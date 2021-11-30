import t from 'api-helpers/toGqlParams';
import { renderFragments } from './_fragments';
import { escape } from 'helpers';
import _ from 'lodash';


const entityFields =  `
    id
    name
    label
    description
    mainImage
    avgScore
    countScores
`;

/**
 * Поиск объектов по имени
 * 
 * @param {Object} params
 * @returns {String}
 */
export function search(params) {
    params.type = 'entities';
    
    return `
        {search ${ t(params) } {
            count,
            entities {
                id,
                label,
                mainImage,
            }
        }
    }`;
}

/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function getRanking(params, fragments) {   
    params.limit = params.limit || 10;

    return `
        {ranking ${ t(params) } {
            countEntities,
            entities {
                ${ entityFields } 
                ${ renderFragments(fragments) }
            }
        }
    }`;
}


/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function findAll(params, fragments) {   
    params.limit = params.limit || 10;

    return `
        {entities ${ t(params) }  {
            ${ entityFields } 
            ${ renderFragments(fragments) }
        }
    }`;
}

/**
 * Добавление галлереи к объекту
 * 
 * @param {Object} params
 * @returns {String}
 */
export function addGallery(params) {
    return `
        mutation {addGalleryToEntity ${ t(params) } {
            id,
            items (limit: 3) {
                id,
                hash,
                type,
                url,
            }
        }
    }`;
}


/**
 * Получение одного объекта по идентификатору
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function findById(params, fragments) {       
    return `
        {entity ${ t(params) } {
            ${ entityFields } 
            ${ renderFragments(fragments) }
        }
    }`;
}

/**
 * Создание объекта
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {
    return `
        mutation {createEntity ${ t(params) } 
            ${ entityFields } 
        }`;
}

/**
 * Обновление объекта
 * 
 * @param {Object} params
 * @returns {String}
 */
export function update(params) {
    if ('description' in params) {
        params.description = escape(params.description);
    }

    return `
        mutation {updateEntity ${ t(params) } 
            ${ entityFields } 
        }`;
}

/**
 * Обновление объекта
 * 
 * @param {Object} params
 * @returns {String}
 */
export function setProperty(params) {
    return `
        mutation {addPropertyToEntity ${ t(params) } {
                id
            }
        }`;
}
