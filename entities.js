import { getConditions as t } from './_util';


/**
 * Поиск объектов по имени
 * 
 * @param {Object} params
 * @returns {String}
 */
export function search(params) {
    params.type = 'entities';
    
    return `
        {search ${ t(params) } {
            id,
            data,
            text,
            subtitle
        }
    }`;
}


/**
 * Ранжирование объектов
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function findAll(params, options) {   
    params.limit = params.limit || 10;
    
    if (!options) {
        options = {
            section: null
        };
    }

    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }

    return `
        {entities ${ t(params) } 
            ${ getFragments(options.fragments) }
        }`;
}


/**
 * Получение одного объекта по идентификатору
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String}
 */
export function findById(params, options = {}) {       
    if ('filter' in params) {
        if (Object.keys(params.filter).length > 0) {
            params.filter = JSON.stringify(params.filter).replace(/"/g, '\'');  
        }
    }

    return `
        {entity ${ t(params) } 
            ${ getFragments(options.fragments) }
        }`;
}

/**
 * Создание объекта
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {
    return `
        mutation {createEntity ${ t(params) } {
            id,
            name,
            label
        }
    }`;
}

/**
 * Обновление объекта
 * 
 * @param {Object} params
 * @returns {String}
 */
export function update(params) {
    return `
        mutation {updateEntity ${ t(params) } {
            id,
            name,
            label
        }
    }`;
}

export function compare(params, options) {
    let extra = [];

    let properties = `
        properties(group_property_id: "${params.groupPropertyId}") {
            name,
            label,
            value,
            id
        }`;
    
    let criteria = `
        avg_scores (criteria: "${options.criteria}") {
            criteria{
                id,
                label
            },
            value
        }`;
    
    if (options.types.includes('properties')) {
        extra.push(properties);
    };
    
    if (options.types.includes('criteria')) {
        extra.push(criteria);
    };
    
    params.typeCompare = "properties";

    return `{
        compare_entities ${ t(params) }{
            id,
            label,
            main_image,
            ${extra.join(',')}
        }
    }`;
}



const getFragments = (chunk = []) => {
    return `{
        id,
        name,
        description,
        gallery{
            id,
            items (limit: 3){
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
        ${chunk.map(key => fragments[key]).join(',')}
    }`;
};


const fragments = {};

/** Свойства */
fragments.properties = `
    properties {
        id,
        kind,
        popular,
        enriched,
        value,
        label
    }`;

/** Награды */
fragments.medals = `
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
fragments.topAvgScores = `
    top_avg_scores(limit: 3) {
        value, 
        criteria {
            name,
            label
        }
    }`;

/** Худшие оценки */
fragments.bottomAvgScores = `
    bottom_avg_scores(limit: 3) {
        value, 
        criteria {
            name,
            label
        }
    }`;

/** Средние оценки */
fragments.avgScores = `
    avg_scores{
        value, 
        count_scores, 
        criteria_id
    }`;

/** Средние оценки с детализацией по критериям  */
fragments.avgEnrichedScores = `
    avg_scores {
        value, 
        count_scores, 
        criteria{
            id,
            label
        }
    }`;

/** Медали по свойствам */
fragments.specialMedals = `
    special_medals {
        criteria{
            id,
            label
        }
        place,
        value,
        property {
            name,
            label
        }
        property_value {
            name, 
            label
        }
    }`;

fragments.prices = `
    prices {
        id, 
        value, 
        marketplace {
            id, 
            name, 
            label
        }
    }`;
