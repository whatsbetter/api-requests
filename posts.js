import { getConditions } from './_util';

/**
 * Поиск всех постов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {  
    let conditions = getConditions(params);  
    return `{posts ${conditions} {id, title, alias, published, sphere{label, name, id}, author{name, main_image}}}`;
}

/**
 * Поиск поста по синониму
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findByAlias(params) {        
    let conditions = getConditions(params);   
    return `{post ${conditions} {id, alias, title, content, published, preamble, metadata {scores {id, criterion {id, label}, entity {id, label, main_image}, value, user{name, main_image}}} author{id, name, main_image}}}`;
}

/**
 * Создание поста
 * 
 * @param {type} params
 * @returns {String}
 */
export function create(params) {
    if (!('alias' in params)) {
	params.alias = "";
    }
    params.title = params.title.replace(/\\([\s\S])|(")/g,"\\$1$2");
    
    let conditions = getConditions(params);    
    return `mutation {createPost ${conditions} {id}}`;
}

/**
 * Обновление поста
 * 
 * @param {type} params
 * @returns {String}
 */
export function update(params) {
    params.title = params.title.replace(/\\([\s\S])|(")/g,"\\$1$2");
    
    let conditions = getConditions(params);
    return `mutation {updatePost ${conditions} {id, title}}`;
}
