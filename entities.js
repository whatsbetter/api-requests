import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';
import { escape } from 'helpers';
import _ from 'lodash';


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
export function getRanking(params, options) {   
    params.limit = params.limit || 10;
    
    if (!options) {
        options = {
            section: null
        };
    }

    return `
        {ranking ${ t(params) } {
            countEntities,
            entities ${ getFragments(options.fragments) }
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
export function findAll(params) {   
    params.limit = params.limit || 10;
    
    // if (!options) {
    //     options = {
    //         section: null
    //     };
    // }

    let sections = {
        avgScore: {},
        properties: {
            limit: 1,
            includes: 'cost'
        }
    }

    let keys = Objects.keys(sections) 
    let parts

    for (let key of keys) {
        let part = fragments[key](sections[key])
        parts.push(part)
    }

    return `
        {entities ${ t(params) } 
            ${ getFragments(options.fragments) }
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
export function findById(params, options = {}) {       
    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }

    return `
        {entity ${ t(params) } 
            ${ getFragments(options.fragments, options) }
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
            ${ getFragments() }
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
        params.description = escape(params.description)
    }

    return `
        mutation {updateEntity ${ t(params) } 
            ${ getFragments() }
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


const getFragments = (chunk = [], options = {}) => {    
    let galleryLimit = options.galleryLimit || 3;
    
    return `{
        id,
        name,
        description,
        gallery {
            id,
            countMedia,
            items (limit: ${ galleryLimit }){
                id,
                hash,
                type,
                url,
            }
        }
        mainImage,
        label,
        avgScore,
        countScores,
        video {
            id,
            hash,
            type,
            url,
        },
        lng,
        lat,
        myScores{
            criterionID,
            value
        }
        ${chunk.map(key => fragments[key]).join(',')}
    }`;
};


