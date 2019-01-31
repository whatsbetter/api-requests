import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://api-v2m.whatsbetter.me/graphql');

const getCookie = (name) => {
    let matches;
    
    if (typeof navigator === 'undefined') {
        return;
    }    
    
    if (navigator.product === 'ReactNative') {
        return null;
    }

    matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    
    if (matches) {
        return decodeURIComponent(matches[1]);
    } 
    else {
        return void 0;
    }
};

let token = getCookie('token');
if (token) {
    client.setHeader('X-Token', token);
}

export default client;