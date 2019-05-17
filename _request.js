import config from 'config';
import camelize from 'camelize';
import headers from './_headers';


const request = (query, caller, params, options, extraHeaders) => {
    
    console.groupCollapsed('API', caller);
    console.log(query);
    console.log('params: ', params);
    console.log('options: ', options);
    console.log('extraHeaders: ', extraHeaders);
    console.groupEnd();

    return fetch(config.apiServer, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                ...headers,
                ...extraHeaders
            },
            body: JSON.stringify({ query })
        })
        .then(res => res.json())
        .then(res => camelize(res.data));
};

export default request;