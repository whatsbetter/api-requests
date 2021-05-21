import t from 'api-helpers/toGqlParams';


/**
 * Получить поток
 * 
 * @param {Object} params
 * @returns {String}
 * 
 */
export function get(params) {        
    return `{
        feed ${ t(params) }{
            createdAt,
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
                    mainImage
                },
                value
            },
            user {
                id,
                name,
                mainImage,
                karma
            }
        }
    }`;
}