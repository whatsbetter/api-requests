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
        location_type,
        criterion{
            id, 
            label
        },
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



fragments.user =  `
    id
    name
    main_image
    relation
    karma
    created_at
`;

fragments.userCounters = `
    count_friends
    count_spheres
    count_posts
    count_presets
    count_followers
    count_following
    count_referrals
`

fragments.roles = `
    roles {
        id, 
        name
    },
`;

fragments.karmaDetails = `
    karma_details {
        count_scores,
        count_spheres,
        items {
            sphere {
                id,
                name
            },
            count_scores
        }
    },
`

export default fragments;