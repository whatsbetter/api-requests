import { getConditions as t } from './_util';


/**
 * Поиск
 * 
 * @param {Object} params
 * @returns {String}
 */
export function execute(params) {  
    return `
        {search ${ t(params) } { 
            text,
            data,
            subtitle
        }
    }`;
}

