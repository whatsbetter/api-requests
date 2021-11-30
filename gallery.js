import t from 'api-helpers/toGqlParams';

let fragments = {};

fragments.gallery = (params) =>  `
    id
    countMedia
    items ${ t(params) } {
        id
        hash
        url
        type
    }`;

/**
 * Получить галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function get(params, limit = 10) {   
    return `
        {gallery ${ t(params) } {
            ${ fragments.gallery({limit}) }
        }
    }`;
}

/**
 * Создать галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params, ) {   
    return `
        mutation {createGallery ${ t(params) } 
            ${ fragments.gallery({}) }
        }`;
}

/**
 * Обновить галлерею
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function update(params) {
    return `
        mutation {updateGallery ${ t(params) } 
            ${ fragments.gallery({}) }
        }`;
}

/**
 * Добавить элемент в галерею
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function addMedia(params) {
    return `
        mutation {addMediaToGallery ${ t(params) } 
            result
        }   
    }`;
}

/**
 * Удалить элемент из галереи
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function removeMedia(params) {
    if (!params.id) {
        throw new Error('Set ID to remove items in gallery');
    }
    return `
        mutation {removeMediaFromGallery ${ t(params) } 
            result
        }
    }`;
}
