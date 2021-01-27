import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';


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
            id,
            data,
            text,
            subtitle
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
export function findAll(params, options) {   
    params.limit = params.limit || 10;
    
    if (!options) {
        options = {
            section: null
        };
    }

    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
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

export function compare(params, options) {
    let extra = [];

    let properties = `
        properties(group_property_id: "${params.groupPropertyId}") {
            name,
            label,
            value,
            id
        }`;
    
    let criteria = `
        avg_scores (criteria: "${options.criteria}") {
            criteria{
                id,
                label
            },
            value
        }`;
    
    if (options.types.includes('properties')) {
        extra.push(properties);
    };
    
    if (options.types.includes('criteria')) {
        extra.push(criteria);
    };
    
    params.typeCompare = "properties";

    return `{
        compare_entities ${ t(params) }{
            id,
            label,
            main_image,
            ${extra.join(',')}
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
            items (limit: ${ galleryLimit }){
                id,
                hash,
                type,
                url,
            }
        }
        main_image,
        label,
        avg,
        count_scores,
        video {
            id,
            hash,
            type,
            url,
        },
        lng,
        lat,
        current_user_scores{
            criteria_id,
            value
        }
        city {
            name,
            label,
            path,
            path_label
        }
        ${chunk.map(key => fragments[key]).join(',')}
    }`;
};


