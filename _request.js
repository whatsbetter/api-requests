
import { GraphQLClient } from 'graphql-request'
import camelize from 'camelize';
const client = new GraphQLClient('http://api-v2m.whatsbetter.me/graphql');

const getCookie = (name) => {
    let matches;
    
    if (typeof navigator === 'undefined') {
	return;
    }    
    
    if (navigator.product === 'ReactNative') {
	return;
    }

    matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    
    if (matches) {
	return decodeURIComponent(matches[1]);
    } 
    else {
	return void 0;
    }
};

let token = getCookie("token");
if (token) {
    client.setHeaders({"X-Token" : token});
}

const request = (query) => {
    console.log("API | ", query);
    return client
	.request(query)
	.then(body => camelize(body));
};

export default request;