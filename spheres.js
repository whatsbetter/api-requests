import { getConditions } from './_util';
import request from './_request';

/**
 * Поиск сфер по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    let query = `{search(text:"${params.text}",type:"spheres"){id,data,text}}`;
    return request(query);
}

/**
 * Получение всех сфер
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {
    if (!('limit' in params)) {
	params.limit = 20;
    }
    let conditions = getConditions(params);
    let query = `{spheres${conditions}{name,id,label,have_child,count_scores,count_criteria,count_entities}}`;
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


/**
 * Создание сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function create(params) {
    let conditions = getConditions(params);
    let query = `mutation {createSphere${conditions}{id,name,label}}`;
    return request(query);
}

/**
 * Обновление сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function update(params) {
    let conditions = getConditions(params);
    let query = `mutation {updateSphere${conditions}{id,name,label}}`;
    return request(query);
}