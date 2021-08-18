import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';




/**
 * Получить галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function get(params) {   
    return `
        {gallery ${ t(params) } 
            ${ fragments.gallery }
        }`;
}

/**
 * Создать галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {   
    return `
        mutation {createGallery ${ t(params) } 
            ${ fragments.gallery }
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
            ${ fragments.gallery }
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
            ${ fragments.gallery }
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
            ${ fragments.gallery }
        }`;
}
