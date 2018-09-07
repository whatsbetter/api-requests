import request from './_request';

/**
 * Найти все обновления сфер
 * 
 * @param {Object} params
 * @returns {Function} 
 */
export function findAll(params) {
    let query = `{spheres_releases(status: ${params.status}) {id, title, main_image, description, created_at, sphere{id,label, name}}}`;
    return request(query);
}