

export function findMe(params) {
    return `{user (token: "${params.token}"){id,name,first_name,second_name,main_image}}`
}
