import config from 'config';

import request from 'api-helpers/request';
import requestGroup from 'api-helpers/requestGroup';
import queue from 'api-helpers/queue';
import toGqlRequest from 'api-helpers/toGqlRequest';

import headers, { setHeader, removeHeader } from './_headers';

const chats = require('./chats');
const criteria = require('./criteria');
const comments = require('./comments');
const entities = require('./entities');
const feed = require('./feed');
const gallery = require('./gallery');
const messages = require('./messages');
const notifications = require('./notifications');
const posts = require('./posts');
const properties = require('./properties');
const scores = require('./scores');
const spheres = require('./spheres');
const search = require('./search');
const users = require('./users');
const job = require('./job');
const marketplaces = require('./marketplaces');
const trainings = require('./trainings');


const wrap = toGqlRequest.bind(null, config.apiServer, headers);


module.exports = {
    chats: wrap(chats, 'chats'),
    comments: wrap(comments, 'comments'),
    criteria: wrap(criteria, 'criteria'),
    entities: wrap(entities, 'entities'),
    feed: wrap(feed, 'feed'),
    gallery: wrap(gallery, 'gallery'),
    marketplaces: wrap(marketplaces, 'marketplaces'),
    messages: wrap(messages, 'messages'),
    notifications: wrap(notifications, 'notifications'),
    posts: wrap(posts, 'posts'),
    properties: wrap(properties, 'properties'),
    scores: wrap(scores, 'scores'),
    search: wrap(search, 'search'),
    spheres: wrap(spheres, 'spheres'),
    users: wrap(users, 'users'),
    job: wrap(job, 'job'),
    trainings: wrap(trainings, 'trainings'),
    request: (str) => request({url: config.apiServer, query: str, caller: 'request'}),
    setHeader,
    removeHeader,
    requestGroup,
    queue
};

 
