import request from './_request';
import { getConditions } from './_util';

/**
 * Получить поток
 * 
 * @param {Object} params
 * @returns {Function}
 * 
 */

export function get(params) {        
    let conditions = getConditions(params);
    let query = `{
        feed ${conditions}{
            created_at,
            end,
            start,
            sphere {
                id,
                name,
                label
            },
            scores {
                id,
                criterion {
                    id,
                    label
                },
                count_sub_comments,
                comment {
                    id,
                    text,
                    updated_at,
                    useful,
                    useless
                },
                entity {
                    id,
                    label,
                    main_image
                },
                value
            },
            user {
                id,
                name,
                main_image,
                karma
            }
        }
    }`;
    
    return request(query);
}