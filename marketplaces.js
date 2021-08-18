import t from 'api-helpers/toGqlParams';
   

/**
 * Получение всех магазинов
 * 
 * @param {Object} params
 * @returns {Stting}
 */
export function findAll(params) {  
    
    return `
        {marketplaces ${ t(params) } {
            id,
            name,
            label
        }  
    }`;
}

/**
 * Найти магазин
 * 
 * @param {Object} params
 * @param {Object} options
 * @returns {String} 
 */
export function findById(params) {   
    
    return `
        {marketplace ${ t(params) } {
            id
            name
            label
            address
            phone
            entityID
            authorID
            delivery
            deliveryDescription
            url
        }  
    }`;
}


/**
 * Создать магазин
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function create(params) {
    return `
        mutation {createMarketplace ${ t(params) } {
            id,
            name,
            label
        }
    }`;
}

/**
 * Создать магазин
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function update(params) {
    return `
        mutation {updateMarketplace ${ t(params) } {
            id
        }
    }`;
}
