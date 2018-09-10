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
    params.hide = false;
    
    if (!('parent' in params) && !('type' in params)) {
        params.orderBy = 'popular';
    }

    let conditions = getConditions(params);
    let query = `{spheres${conditions}{name,id,icon,label,have_child,count_scores,count_criteria,subscribed,count_entities}}`;
    return request(query);
}

/**
 * Получение сферы по идентификатору
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findById(params) {
    let query = `{sphere(id: "${params.id}"){name,id,description,label,count_criteria,count_entities,count_scores,popular_criteria{name,id,label}}}`;
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