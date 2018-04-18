import { GraphQLClient } from 'graphql-request'
import camelize from 'camelize';

const client = new GraphQLClient('https://api2.toprater.com/graphql');

const request = (query, params = {}) => {
    let queryString;
    let token = getCookie("token");
    let me = getCookie("me");
    
    if (token) {
	client.setHeaders({"X-Token" : token});
	
    }
    if (me) {
	params.me = me;
    }
    
    if (typeof query === "function") {
	queryString = query(params);
    }
    else if (typeof query === "string") {
	queryString = query;
    }

    return client
	    .request(queryString)
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