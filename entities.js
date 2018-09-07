import { getConditions } from './_util';
import request from './_request';

const entity = '{id,name,main_image,label,avg,properties{id,kind,popular,value,label},count_scores,video{url},avg_scores{value,count_scores,criteria_id},lng,lat,current_user_scores{criteria_id,value}}';

/**
 * Поиск объектов по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    params.type = 'entities';
    
    let conditions = getConditions(params);
    let query = `{search${conditions}{id,data,text}}`;
    
    return request(query);
}


/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {    
    params.limit = params.limit || 10;
    
    if (params.limit > 50) {
        params.limit = 50;
    }
    
    if ('criteria' in params) {
        params.typeOfSerp = 'rating';
    }

    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }
 
    let conditions = getConditions(params);
    let query = `{entities${conditions}${entity}}`;
    return request(query);
}

/**
 * Получение одного объекта по идентификатору
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findById(params) {    
    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }
 
    let conditions = getConditions(params);
    let query = `{entity${conditions}${entity}}`;
    return request(query);
}

/**
 * Создание объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function create(params) {
    let conditions = getConditions(params);
    let query = `mutation {createEntity${conditions}{id,name,label}}`;
    return request(query);
}

/**
 * Обновление объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function update(params) {
    let conditions = getConditions(params);
    let query = `mutation {updateEntity${conditions}{id,name,label}}`;
    return request(query);
}