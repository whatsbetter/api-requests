import { getConditions } from './_util';
import request from './_request';

/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params) {  
    params.preset = false;
    let conditions = getConditions(params); 
    let query = `{posts ${conditions} {id, title, alias, published, preamble, preamble_images{hash}, sphere{label, name, id}, author{name, main_image}, created_at}}`;
    return request(query);
}

/**
 * Поиск поста по синониму
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findByAlias(params) {        
    let conditions = getConditions(params);     
    let query = `{post ${conditions} {id, alias, title, content, published, preamble,  preamble_images{hash}, sphere{id,label}, metadata{criteria {id,label}, scores {id,criterion{id,label}, entity{id, label, main_image}, value, user{name, main_image}}} author{id, name, main_image}, updated_at}}`;
    return request(query);
}

/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findPresets(params) { 
    params.preset = true;
    let conditions = getConditions(params);  
    let query = `{posts ${conditions} {id, title, preamble, preamble_images{hash}, metadata{criteria {id,label}, rating{id,name,main_image,label,avg,video{url},avg_scores{value,count_scores,criteria_id} }}}}`;
    return request(query);
}

/**
 * Создание поста
 * 
 * @param {type} params
 * @returns {Function}
 */
export function create(params) {
    if (!('alias' in params)) {
        params.alias = '';
    }
    params.title = params.title.replace(/\\([\s\S])|(")/g,'\\$1$2');
    
    let conditions = getConditions(params);    
    let query = `mutation {createPost ${conditions} {id}}`;
    return request(query);
}

/**
 * Обновление поста
 * 
 * @param {type} params
 * @returns {Function}
 */
export function update(params) {
    params.title = params.title.replace(/\\([\s\S])|(")/g,'\\$1$2');
    let conditions = getConditions(params);
    let query = `mutation {updatePost ${conditions} {id, title}}`;
    return request(query);
}
