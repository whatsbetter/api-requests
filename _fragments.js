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
    mainImage,
    countCriteria,
    countEntities,
    countScores,
    icon,
    sharingDescription,
    subscribed,
    popularCriteria{
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
        mainImage,
        have_child,
        countCriteria,
        countEntities,
        countScores,
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
        itemsType,
        items {
          id,
          label
        }
        associatedSphereID 
    }`;


/**
 * Награды
 */
fragments.medals = `
    medals {
        place,
        value,
        locationType,
        criterion{
            id, 
            label
        },
    }`;


/**
 * Лучшие оценки
 */
fragments.topAvgScores = `
    topAvgScores(limit: 3) {
        avgValue, 
        countScores,
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
    bottomAvgScores(limit: 3) {
        avgValue, 
        countScores,
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
    avgScores{
        avgValue, 
        countScores, 
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
            unitName, 
            dealName 
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
    accociatedProperties {
        label,
        id,
        sphere{
            id,
            name,
            label,
            description,
            icon,
            popularCriteria{
               id
               label
            }
        }
    }`;



fragments.user =  `
    id
    name
    mainImage
    relation
    karma
    createdAt
`;

fragments.userCounters = `
    countFriends
    countSpheres
    countPosts
    countPresets
    countFollowers
    countFollowing
    countReferrals
    countScores
`

fragments.roles = `
    roles {
        id, 
        name
    },
`;

fragments.karmaDetails = `
    karmaDetails {
        countScores
        countSpheres
        items {
            sphere {
                id,
                label
                mainImage
                name
            },
            countScores
        }
    },
`

export default fragments;