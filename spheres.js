import { getConditions } from './_util';

/**
 * Поиск сфер по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    return `{search(text:"${params.text}",type:"spheres"){id,data,text,subtitle}}`;
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
    return `{spheres${conditions}{name,id,icon,label,have_child,count_scores,count_criteria,subscribed,count_entities}}`;
}

/**
 * Получение сферы по идентификатору
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findById(params) {
    return `{sphere(id: "${params.id}"){name,id,description,label,count_criteria,count_entities,have_map,sharing_description,count_scores,popular_criteria{name,id,label}}}`;
}


/**
 * Создание сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function create(params) {
    let conditions = getConditions(params);
    return `mutation {createSphere${conditions}{id,name,label}}`;
}

/**
 * Обновление сферы
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function update(params) {
    let conditions = getConditions(params);
    return `mutation {updateSphere${conditions}{id,name,label}}`;
}