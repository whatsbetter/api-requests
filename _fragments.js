import t from 'api-helpers/toGqlParams';

/** Свойства */
const fragments = {};

fragments.gallery = (params) =>  `
    gallery {
        id,
        countMedia,
        items ${ t(params) } {
            id,
            hash,
            url,
            type
        }
}`;


fragments.childSpheres  = (params) =>  `
    childSpheres ${ t(params) } {
        id
        name
        description
        label
        mainImage
        countCriteria
        countEntities
        countSpheres
        countScores
        icon
    }`;

/** 
 * Родитель сферы
 */
fragments.parentSpheres = (params) =>  `
    parentSpheres ${ t(params) } {
        id
        name
        label
    }`;



/**
 * Свойства
 */
fragments.properties = (params) =>  `
    properties ${ t(params) } {
        id,
        kind,
        popular,
        value,
        label,
        name,
        units,
        hideOnEntity
        itemsType
        items {
            id,
            label
        }
        associatedSphereID 
    }`;



/**
 * Награды
 */
fragments.medals = (params) => `
    medals ${ t(params) } {
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
fragments.topAvgScores = (params) => `
    topAvgScores ${ t(params) } {
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
fragments.bottomAvgScores = (params) => `
    bottomAvgScores ${ t(params) } {
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
fragments.avgScores = (params) => `
    avgScores ${ t(params) } {
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
fragments.prices = (params) => `
    prices ${ t(params) }  {
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


fragments.userCounters = () => `
    countFriends
    countSpheres
    countPosts
    countPresets
    countFollowers
    countFollowing
    countReferrals
    countScores
`;

fragments.roles = (params) => `
    roles ${ t(params) } {
        id, 
        name
    },
`;

fragments.karmaDetails = (params) => `
    karmaDetails ${ t(params) }  {
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
`;

fragments.criteria  = (params) =>  `
    criteria ${ t(params) } {
        id
        name
        label
        countScores
    }`;

const renderFragments = (items) => {
    if (!items) {
        return '';
    }

    let keys = Object.keys(items);
    let parts = [];

    for (let key of keys) {
        if (typeof fragments[key] === 'function') {
            let part = fragments[key](items[key]);
            parts.push(part);
        }
    }

    return parts.join(' ');
};

export {
    fragments,
    renderFragments
};