import { getConditions } from './_util';


export function findAll(params) {
    let conditions = getConditions(params);
    return `{properties ${conditions} {id, name, label, kind, items{name, id}}}`;
}
