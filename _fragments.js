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
    icon,
    sharing_description,
    subscribed,
    roles {
        id,
        name
    }
    popular_criteria{
        name,
        id,
        label
    }`;

fragments.sphereChildren = `
    children{
        id,
        name,
        description,
        label,
        main_image,
        have_child,
        count_criteria,
        count_entities,
        count_scores,
        icon
    }`;



/**
 * Свойства
 */
fragments.properties = `
    properties {
        id,
        kind,
        popular,
        value,
        label,
        units,
        items_type,
        items {
          id,
          label
        }
        associated_sphere_id 
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
        avg_value, 
        count_scores,
        criterion {
            id,
            name,
            label
        }
    }`;


/**
 * Худшие оценки 
 */
fragments.bottomAvgScores = `
    bottom_avg_scores(limit: 3) {
        avg_value, 
        count_scores,
        criterion {
            id,
            name,
            label
        }
    }`;


/**
 * Средние оценки 
 */
fragments.avgScores = `
    avg_scores{
        avg_value, 
        count_scores, 
        criterion {
            id,
            name,
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
        link,
        marketplace {
            id, 
            name, 
            label,
            unit_name, 
            deal_name 
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

fragments.user =  `{
    id,
    name,
    main_image,
    karma
}`,
    
fragments.userDetailed = `{
    id,
    name,
    first_name,
    second_name,
    main_image,
    karma,
    providers {
        type
    }, 
    roles {
        id, 
        name
    },
    phone,
    created_at,
    
}`;

// karma_details {
//     sphere{
//         id,
//         label,
//         name
//     },
//     value,
//     count_scores,
//     count_useless,
//     count_useful
// }


export default fragments;