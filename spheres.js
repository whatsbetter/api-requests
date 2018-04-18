

export function findAll() {
    return `{spheres{name,id,label}}`;
}

export function findById(params) {
    return `{sphere(id: "${params.id}"){name,id,label,count_criteria,count_entities,popular_criteria{name,id,label}}}`;
}
