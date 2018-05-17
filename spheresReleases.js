

export function findAll(params) {
    return `{spheres_releases(status: ${params.status}) {id, title, main_image, description, created_at, sphere{id,label, name}}}`;
}
