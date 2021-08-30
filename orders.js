import t from 'api-helpers/toGqlParams';


/**
 * Получить список заказов
 * 
 * @param {Object} params
 * @returns {String}
 */
export function findAll(params) {   
    return `{
        orders ${ t(params) } {
            id
            amount
            status
            deliveryAddress
            paymentURL
            failURL
            successURL
            createdAt
            items {
                marketplaceID
                entity {
                    id
                    label
                    mainImage
                }
                price
                quantity
                discount
                amount
            }
        }
    }`;
}