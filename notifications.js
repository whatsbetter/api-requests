import t from 'api-helpers/toGqlParams';

/**
 * Получить поток
 * 
 * @param {Object} params
 * @returns {String}
 */

export function get(params) {  
    return `{
        notifications ${ t(params) } {
            status,
            comment {
                parentScore {
                    id, 
                    comment {
                        text, 
                        updated_at
                    }, 
                    value
                },
                text,
                entity {
                    id,
                    label,
                    mainImage
                },
                autor {
                    id,
                    name,
                    mainImage,
                    karma
                }, 
                criteria {
                    id,
                    label
                },
                sphere {
                    id,
                    name,
                    label
                }
            }, 
            routing_key, 
            kind
        }
    }`;
}

export function getCount() {   
    return `{notifications_count (status: "new")}`;
}

export function setStatus(params) {  
    params.status = 'read';
    return `
        mutation {updateNotification 
            ${ t(params) } 
        }`;
}