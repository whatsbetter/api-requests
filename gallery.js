import { getConditions as gc } from './_util';

/**
 * Создать галлерею
 * 
 * @param {Object} params
 * @returns {Function}
 */

const gallery = '{id}';

export function get(params) {   
    return `{gallery${gc(params)}{id,items(limit: 100){id,hash}}}`;
}

export function create(params) {   
    return `mutation {createGallery${gc(params)}${gallery}}`;
}

/**
 * Обновить галлерею
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function update(params) {
    return `mutation {updateGallery${gc(params)}${gallery}}`;
}

/**
 * Добавить элемент в галерею
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function addMedia(params) {
    return `mutation {addMediaToGallery${gc(params)}${gallery}}`;
}

/**
 * Удалить элемент из галереи
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function removeMedia(params) {
    return `mutation {removeMediaFromGallery${gc(params)}${gallery}}`;
}
