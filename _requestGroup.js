import client from './_client';
import camelize from 'camelize';

const requestGroup = (queries) => {
    let req = queries.map(t => t.slice(1, -1));
    let query = `{${req.join('')}}`;
        
    console.group('API GROUP');
    queries.map(t =>  console.log(t));
    console.groupEnd();

    return client
        .request(query)
        .then(body => camelize(body));
};

export default requestGroup;