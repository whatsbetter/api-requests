import { getConditions } from './_util';
import request from './_request';

/**
 * Поиск сфер по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    let query = `{search (text: "${params.text}", type: "spheres"){id,data,text}}`;
    return request(query);
}

/**
 * Получение всех сфер
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {
    let conditions = getConditions(params);
    let query = `{spheres${conditions}{name,id,label}}`;
    return request(query);
}

/**
 * Получение сферы по идентификатору
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findById(params) {
    let query = `{sphere(id: "${params.id}"){name,id,label,count_criteria,count_entities,popular_criteria{name,id,label}}}`;
    return request(query);
}
