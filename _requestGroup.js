import headers from './_headers';
import camelize from 'camelize';


const requestGroup = (queries) => {
    let req = queries.map(t => {
        let str = t.replace(/\s+/g, ' ').trim();
        return str.slice(1, -1);;
    });
    
    let query = `{${req.join('')}}`;
        
    console.group('API GROUP');
    queries.map(t =>  console.log(t));
    console.groupEnd();
    
    return fetch('https://api-v2m.whatsbetter.me/graphql', 
        {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify({ query })
        })
        .then(res => res.json())
        .then(res => camelize(res.data));
};

export default requestGroup;