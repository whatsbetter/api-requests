import { GraphQLClient } from 'graphql-request'
import camelize from 'camelize';

const client = new GraphQLClient('https://api2.toprater.com/graphql');

const request = (query) => {
    let token = getCookie("token");

    if (token) {
	client.setHeaders({"X-Token" : token});
    }

    console.log(query);
    return client
	.request(query)
	.then(body => camelize(body));
};


const getCookie = (name) => {
    let matches;
    
    matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    
    if (matches) {
	return decodeURIComponent(matches[1]);
    } 
    else {
	return void 0;
    }
};


export default request;