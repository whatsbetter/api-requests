const headers = {};

export const setHeader  = (key, value) => {
    headers[key] = value;
}; 

export const removeHeader  = (key) => {
    delete headers[key];
}; 

export default headers;