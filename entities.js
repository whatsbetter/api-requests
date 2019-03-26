import { getConditions as gc } from './_util';


/**
 * Поиск объектов по имени
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function search(params) {
    params.type = 'entities';
    
    return `{search${gc(params)}{id,data,text,subtitle}}`;
}


/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function findAll(params, options, headers = null) {   
    if (!options) {
        options = {
            section: null
        };
    }
    
    params.limit = params.limit || 10;

    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }

    let fields = entityQL(options.sections);
    return `{entities${gc(params)}${fields}}`;
}

/**
 * Получение одного объекта по идентификатору
 * 
 * @param {Object} params
 * @param {Object} options
 * @param {Object} headers
 * @returns {Function}
 */
export function findById(params, options, headers) {       
    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }

    let fields = entityQL(options.sections); 
    return `{entity${gc(params)}${fields}}`;
}

/**
 * Создание объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function create(params) {
    return `mutation {createEntity${gc(params)}{id,name,label}}`;
}

/**
 * Обновление объекта
 * 
 * @param {Object} params
 * @returns {Function}
 */
export function update(params) {
    return `mutation {updateEntity${gc(params)}{id,name,label}}`;
}

const entityQL = (extra = []) => {
    return `{
        id,
        name,
        description,
        gallery{
            id,
            items(limit: 3){
                id,
                hash
            }
        }
        main_image,
        label,
        avg,
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
        ${extra.map(key => entity[key]).join(',')}
    }`;
};


const entity = {};

/** Свойства */
entity.properties = `
    properties {
        id,
        kind,
        popular,
        value,
        label
    }`;

/** Награды */
entity.medals = `
    medals{
        place,
        value,
        criteria{
            id, 
            label
        },
        start_date,
        end_date
    }`;

/** Лучшие оценки */
entity.topAvgScores = `
    top_avg_scores(limit: 3) {
        value, 
        criteria {
            name,
            label
        }
    }`;

/** Худшие оценки */
entity.bottomAvgScores = `
    bottom_avg_scores(limit: 3) {
        value, 
        criteria {
            name,
            label
        }
    }`;

/** Средние оценки */
entity.avgScores = `
    avg_scores{
        value, 
        count_scores, 
        criteria_id
    }`;

/** Средние оценки с детализацией по критериям  */
entity.avgEnrichedScores = `
    avg_scores {
        value, 
        count_scores, 
        criteria{
            id,
            label
        }
    }`;

/** Медали по свойствам */
entity.specialMedals = `
    special_medals{
        criteria{
            id,
            label
        }
        place,
        value,
        property{
            name,
            label
        }
        property_value{
            name, 
            label
        }
  }`;