import config from 'config';

import request from 'api-helpers/request';
import requestGroup from 'api-helpers/requestGroup';
import queue from 'api-helpers/queue';
import toGqlRequest from 'api-helpers/toGqlRequest';

import headers, { setHeader, removeHeader, getHeader } from './_headers';

const chats = require('./chats');
const criteria = require('./criteria');
const comments = require('./comments');
const entities = require('./entities');
const feed = require('./feed');
const gallery = require('./gallery');
const messages = require('./messages');
const notifications = require('./notifications');
const orders = require('./orders');
const posts = require('./posts');
const presets = require('./presets');
const properties = require('./properties');
const filters = require('./filters');
const sphereProperties = require('./sphereProperties');
const scores = require('./scores');
const spheres = require('./spheres');
const search = require('./search');
const marketplaces = require('./marketplaces');
const media = require('./media');
const users = require('./users');
const userAddresses = require('./userAddresses');


const wrap = toGqlRequest.bind(null, config.apiServer, headers);


module.exports = {
    chats: wrap(chats, 'chats'),
    comments: wrap(comments, 'comments'),
    criteria: wrap(criteria, 'criteria'),
    entities: wrap(entities, 'entities'),
    feed: wrap(feed, 'feed'),
    gallery: wrap(gallery, 'gallery'),
    marketplaces: wrap(marketplaces, 'marketplaces'),
    media: wrap(media, 'media'),
    messages: wrap(messages, 'messages'),
    notifications: wrap(notifications, 'notifications'),
    orders: wrap(orders, 'orders'),
    posts: wrap(posts, 'posts'),
    presets: wrap(presets, 'presets'),
    properties: wrap(properties, 'properties'),
    filters: wrap(filters, 'filters'),
    sphereProperties: wrap(sphereProperties, 'sphereProperties'),
    scores: wrap(scores, 'scores'),
    search: wrap(search, 'search'),
    spheres: wrap(spheres, 'spheres'),
    users: wrap(users, 'users'),
    userAddresses: wrap(userAddresses, 'userAddresses'),
    request: (str, variables) => request({url: config.apiServer, query: str, caller: 'request', headers, variables: variables}),
    requestGroup: (str) => request({url: config.apiServer, query: requestGroup(str), isGroup: true, caller: 'request', headers}),
    setHeader,
    getHeader,
    removeHeader,
    queue
};

 
