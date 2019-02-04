import client from './_client';
import camelize from 'camelize';

const request = (query, headers) => {
    console.log('API | ', query);

    if (headers) {
        Object.keys(headers).map(key => {
            client.setHeader(key, headers[key]);
        });
    }

    return client
        .request(query)
        .then(body => camelize(body));
};

export default request;