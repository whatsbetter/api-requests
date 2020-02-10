/** Свойства */
const fragments = {};

/**
 * Сфера с полной детализацией
 */
fragments.sphere = `
    id,
    name,
    description,
    label,
    main_image,
    count_criteria,
    count_entities,
    count_scores,
    have_map,
    icon,
    sharing_description,
    roles {
        id,
        name
    }
    popular_criteria{
        name,
        id,
        label
    }`;


/**
 * Свойства
 */
fragments.properties = `
    properties {
        id,
        kind,
        popular,
        enriched,
        value,
        label
    }`;


/**
 * Награды
 */
fragments.medals = `
    medals {
        place,
        value,
        criteria{
            id, 
            label
        },
        start_date,
        end_date
    }`;


/**
 * Лучшие оценки
 */
fragments.topAvgScores = `
    top_avg_scores(limit: 3) {
        value, 
        criteria {
            name,
            label
        }
    }`;


/**
 * Худшие оценки 
 */
fragments.bottomAvgScores = `
    bottom_avg_scores(limit: 3) {
        value, 
        criteria {
            name,
            label
        }
    }`;


/**
 * Средние оценки 
 */
fragments.avgScores = `
    avg_scores{
        value, 
        count_scores, 
        criteria_id
    }`;


/** 
 * Средние оценки с детализацией по критериям 
 */
fragments.avgEnrichedScores = `
    avg_scores {
        value, 
        count_scores, 
        criteria{
            id,
            label
        }
    }`;


/** 
 * Медали по свойствам
 */
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

/** 
 * Цены
 */
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


/** 
 * Родитель сферы
 */
fragments.parent = `
    parent {
        label,
        id,
        name
    }`;

fragments.accociatedProperties = `
    accociated_properties {
        label,
        id,
        sphere{
            id,
            name,
            label,
            description,
            icon,
            popular_criteria{
               id
               label
            }
        }
    }`;

/** 
 * Метаданные для пресета
 */
fragments.presetMetadata = `
    metadata {
        criteria {
            id,
            label
        }, 
        scores {
            id, 
            criterion {
                id, 
                label
            }, 
            entity{ 
                id, 
                label, 
                main_image
            }, 
            value,
            user {
                name, 
                main_image
            }
        }
        rating {
            id,
            name,
            label,
            main_image,
            description,
            avg,
            video {
                url
            },
            ${fragments.properties}
            ${fragments.prices}            
            ${fragments.avgScores}  
        }
    }`;

export default fragments;