

export function findAll(params) {
    return `{criteria(sphere_id: "${params.sphere}"){id,name,label}}`;
}
