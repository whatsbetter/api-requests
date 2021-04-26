import t from 'api-helpers/toGqlParams';
import fragments from './_fragments';
import _ from 'lodash';


/**
 * Найти текущего пользователя по токену
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findById(params, options) {
    let uf = 'fragments' in options ? options.fragments : []
    uf.push("user")
    uf = _.uniq(uf)

    return `
        {user ${ t(params)}  {
                ${ uf.map(key => fragments[key]).join(',') }
            }
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
 * Обновить пользователя
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function update(params = {}) {    
    return `
        mutation {updateUser ${ t(params) } {
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
            users{
                id,
                name,
                main_image
                karma
            }
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
        {user (token: "${params.token}") {
                ${ fragments.user }
                ${ fragments.roles }
                count_scores
            }
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
            id
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
        {friends ${ t(params) } {
                ${ fragments.user }
            }
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
        {get_partners_users ${ t(params) }  { 
                ${ fragments.user }
            }
        }`;
}

/**
 * Поиск подписчиков
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function findFollowers(params) {
    return `
        {followers ${ t(params) }  {
                ${ fragments.user }
            }
        }`;
}

/**
 * Поиск подписок
 * 
 * @param {Object} params
 * @returns {String} 
 */
 export function findFollowing(params) {
    return `
        {following ${ t(params) }  {
                ${ fragments.user }
            }
        }`;
}

/**
 * Поиск рефералов
 * 
 * @param {Object} params
 * @returns {String} 
 */
 export function findReferrals(params) {
    return `
        {referrals ${ t(params) }  {
                ${ fragments.user }
            }
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
            id, 
            name
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

/**
 * Добавить в друзья
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function addFriend(params) {
     return `
        mutation {addFriend ${ t(params) } {
            id, name
        }
    }`;
}

/**
 * Добавить в друзья
 * 
 * @param {Object} params
 * @returns {String} 
 */
 export function confirmFriend(params) {
    return `
       mutation {confirmFriend ${ t(params) } {
           id, 
           name
       }
   }`;
}

export function findSphereSubscribers(params) {
    return `
        {sphereSubscribers ${ t(params) } {
            id,
            name,
            main_image
            karma
       }
   }`;
}

export function friendsOfFriends(params) {
    return `
        {friendsOfFriends ${ t(params) } {
            id,
            name,
            main_image
            karma
       }
   }`;
}


export function whoRated(params) {
    return `
        {whoRated ${ t(params) } {
            id,
            name,
            main_image
            count_scores
       }
   }`;
}

export function findExperts(params) {
    return `
        {experts ${ t(params) } {
            id,
            name,
            main_image
            count_scores
       }
   }`;
}

export function getSimilarity(params) {
    let fragment = `
        difference
        entity {
            id
            label
            main_image
        }
        criterion {
            id,
            label
        }
        sphere {
            id
            label
        }
        scores {
            user_id,
            value
        }
    `


    return `{
        similarity ${ t(params) } { 
            value
            count_general_scores
            count_agree 
            count_disagree 
            agree {
                ${ fragment }
            }     
            disagree {
                ${ fragment }
            }
        }
   }`;
}


