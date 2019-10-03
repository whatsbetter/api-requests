import { getConditions as t } from './_util';
const fragments = {};


fragments.user =  `{
    id,
    name,
    main_image,
    karma,
    providers{
        type
    }
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
    karma_details {
        sphere{
            id,
            label,
            name
        },
        value,
        count_scores,
        count_useless,
        count_useful
    }
}`;


/**
 * Найти текущего пользователя по токену
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findById(params) {
    return `
        {user ${ t(params)} 
            ${ fragments.userDetailed }
        }`;
}


/**
 * Поиск пользователей
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findAll(params = {}) {
    params.limit = params.limit || 20;
    
    return `
        {users ${ t(params) } {
            id,
            name,
            main_image
        }
    }`;
}


/**
 * Поиск пользователей по имени
 * 
 * @param {Object} params
 * @returns {String}
 */
export function search(params) {
    return `
        {search (text:"${params.text}", type:"users") {
            id,
            data,
            text
        }
    }`;
}

/**
 * Найти текущего пользователя по токену
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findMe(params) {
    return `
        {user (token: "${params.token}")
            ${fragments.userDetailed}
        }
    `;
}

/**
 * Добавить подписку на сферу
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function addSubscriptionToSphere(params) {
    return `
        mutation {addSubscriptionForSpheres ${ t(params) } {
            id,
            name,
            label,
            icon
        }
    }`;
}

/**
 * Удалить подписку на сферу
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function removeSubscriptionToSphere(params) {
    return `
        mutation {removeSubscriptionForSpheres ${ t(params) } {
            id
        }
    }`;
}

/**
 * Получить сферы, на которые подписан пользователь
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findSubscriptionSpheres(params) {
    return `
        {subscription_spheres ${ t(params) } {
            id,
            name,
            icon,
            label,
            count_scores,
            count_criteria,
            count_entities
        }
    }`;
}


/**
 * Поиск друзей
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findFriends(params) {    
    params.limit = params.limit || 20;

    return `
        {friends ${ t(params) } {
            id,
            name,
            phone,
            first_name,
            second_name,
            main_image
        }
    }`;
}

export function getPartners() {
    return `
        {get_partners_users {
            id,
            name,
            phone,
            main_image
        }
    }`;
}

