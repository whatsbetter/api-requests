import { getConditions as gc } from './_util';
import request from './_request';

/**
 * Создать галлерею
 * 
 * @param {Object} params
 * @returns {Function}
 */

const gallery = '{id}';

export function get(params) {   
    let query = `{gallery${gc(params)}{id,items(limit: 100){id,hash}}}`;
    return request(query);
}

export function create(params) {   
    let query = `mutation {createGallery${gc(params)}${gallery}}`;
    return request(query);
}

/**
 * Обновить галлерею
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function update(params) {
    let query = `mutation {updateGallery${gc(params)}${gallery}}`;
    return request(query);
}

/**
 * Добавить элемент в галерею
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function addMedia(params) {
    let query = `mutation {addMediaToGallery${gc(params)}${gallery}}`;
    return request(query);
}

/**
 * Удалить элемент из галереи
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function removeMedia(params) {
    let query = `mutation {removeMediaFromGallery${gc(params)}${gallery}}`;
    return request(query);
}
