import { getConditions } from './_util';


export function findAll(params) {
    let conditions = getConditions(params);
    return `{spheres ${conditions} {name,id,label}}`;
}

export function findById(params) {
    return `{sphere(id: "${params.id}"){name,id,label,count_criteria,count_entities,popular_criteria{name,id,label}}}`;
}
