import { getConditions as t } from './_util';
import fragments from './_fragments';


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
            karma,
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
            description,
            label,
            main_image,
            count_criteria,
            count_entities,
            count_scores,
            have_map,
            icon,
            sharing_description,
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
        {friends ${ t(params) } 
            ${ fragments.user }
        }`;
}


/**
 * Поиск рефераллов
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function getPartners(params) {
    return `
        {get_partners_users ${ t(params) }  
            ${ fragments.user }
        }`;
}

/**
 * Поиск подписчиков
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findSubscribes(params) {
    return `
        {subscribers ${ t(params) } 
            ${ fragments.user }
        }`;
}

/**
 * Подписаться
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function addSubscriber(params) {
    return `
        mutation {addSubscriber ${ t(params) } {
            id, name
        }
    }`;
}

/**
 * Отписаться
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function removeSubscriber(params) {
     return `
        mutation {removeSubscriber ${ t(params) } {
            id, name
        }
    }`;
}
