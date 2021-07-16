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
            mainImage
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
            mainImage
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
                mainImage
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
export function findMe() {
    return `
        {me {
                ${ fragments.user }
                ${ fragments.roles }
                countScores
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
            mainImage
            karma
       }
   }`;
}

export function friendsOfFriends(params) {
    return `
        {friendsOfFriends ${ t(params) } {
            id,
            name,
            mainImage
            karma
       }
   }`;
}


export function whoRated(params) {
    return `
        {whoRated ${ t(params) } {
            id,
            name,
            mainImage
            countScores
       }
   }`;
}

export function findExperts(params) {
    return `
        {experts ${ t(params) } {
            id,
            name,
            mainImage
            countScores
       }
   }`;
}

export function getSimilarity(params) {
    let fragment = `
        difference
        entity {
            id
            label
            mainImage
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
            userID,
            value
        }
    `


    return `{
        similarity ${ t(params) } { 
            value
            countGeneralScores
            countAgree 
            countDisagree 
            users {
                id,
                name
                mainImage
                countScores
            }
            agree {
                ${ fragment }
            }     
            disagree {
                ${ fragment }
            }
        }
   }`;
}


