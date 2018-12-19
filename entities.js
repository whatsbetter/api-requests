import { getConditions as gc } from './_util';
import request from './_request';

const entityQL = (extra = []) => {
    return `{
        id,
        name,
        description,
        main_image,
        label,
        avg,
        properties {
            id,
            kind,
            popular,
            value,
            label
        },
        medals{
            place,
            value,
            criteria{
                id, 
                label
            },
            start_date,
            end_date
        },
        count_scores,
        video {
            url
        },
        lng,
        lat,
        current_user_scores{
            criteria_id,
            value
        }
        city {
            name,
            label,
            path,
            path_label
        }
        ${extra.join(',')}
    }`;
};

const topAvgScores = 'top_avg_scores(limit: 3) {value, criteria {name,label}}';
const bottomAvgScores = 'bottom_avg_scores(limit: 3) {value, criteria {name,label}}';
const avgScores = 'avg_scores{value, count_scores, criteria_id}';
const avgEnrichScores = 'avg_scores{value, count_scores, criteria{id,label}}';


/**
 * Поиск объектов по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    params.type = 'entities';
    
    let query = `{search${gc(params)}{id,data,text,subtitle}}`;
    
    return request(query);
}


/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params, headers = null) {    
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
 
    let entity = entityQL([avgScores]);
    let query = `{entities${gc(params)}${entity}}`;
    return request(query, headers);
}

/**
 * Получение одного объекта по идентификатору
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findById(params, options, headers) {   
    let entity;
    
    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }
    
    if (options.type === 'rating') {
        entity = entityQL([avgScores]); 
    }
    else if (options.type === 'detailed') {
        entity = entityQL([avgEnrichScores, topAvgScores, bottomAvgScores]); 
    }
    
    let query = `{entity${gc(params)}${entity}}`;
    return request(query, headers);
}

/**
 * Создание объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function create(params) {
    let query = `mutation {createEntity${gc(params)}{id,name,label}}`;
    return request(query);
}

/**
 * Обновление объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function update(params) {
    let query = `mutation {updateEntity${gc(params)}{id,name,label}}`;
    return request(query);
}