import { getConditions as gc } from './_util';

/**
 * Получить поток
 * 
 * @param {Object} params
 * @returns {Function}
 * 
 */
export function get(params) {        
    return `{
        feed ${gc(params)}{
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
                    gallery{
                        id, 
                        items {
                            id,
                            hash
                        }
                    }
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
}