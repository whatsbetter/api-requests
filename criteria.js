

export function findAll(params) {
    return `{criteria(sphere_id: "${params.sphereId}"){id,name,label}}`;
}
