
export function shakeCase(str) {
    return str.replace(/\.?([A-Z]+)/g, function (x,y) {
        return '_' + y.toLowerCase();
    }).replace(/^_/, '');
}

export function getConditions(params) {
    if (params === undefined) {
        return '';
    }
    
    let query = [];
    
    for (let key of Object.keys(params)) {
        let value;
        let type = typeof params[key];
	
        if (['updatedAt', 'createdAt'].includes(key)) {
            continue;
        }
	
        if (type === 'object') {
            continue;
        }
	
        if (type === 'boolean' || type === 'number') {
            value = `${params[key]}`;  
        }
        else {
            value = `"${params[key]}"`;
        }
	
        query.push(`${shakeCase(key)}: ${value}`);
    }
    
    return query.length > 0 ? `(${query.join(', ')})` : '';
}


