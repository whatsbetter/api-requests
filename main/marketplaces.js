import t from 'api-helpers/toGqlParams';
const fragments = {};



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
export function findById(params, options = {}) {   
    
    return `
        {marketplace ${ t(params) } {
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
export function create(params) {
    return `
        mutation {createMarketplace ${ t(params) } {
            id,
            name,
            label
        }
    }`;
}
