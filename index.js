import _ from 'lodash';
import request from './_request';
import { setHeader } from './_headers';
import requestGroup from './_requestGroup';


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

module.exports = {
    chats: wrap(chats, 'chats'),
    comments: wrap(comments, 'comments'),
    criteria: wrap(criteria, 'criteria'),
    entities: wrap(entities, 'entities'),
    feed: wrap(feed, 'feed'),
    gallery: wrap(gallery, 'gallery'),
    messages: wrap(messages, 'messages'),
    notifications: wrap(notifications, 'notifications'),
    posts: wrap(posts, 'posts'),
    properties: wrap(properties, 'properties'),
    scores: wrap(scores, 'scores'),
    search: wrap(search, 'search'),
    spheres: wrap(spheres, 'spheres'),
    users: wrap(users, 'users'),
    job: wrap(job, 'job'),
    setHeader,
    request,
    requestGroup
};

function wrap(collection, name) {
    return _.mapValues(collection, value => {
        return (...args) => {
            let caller = name + '.' + value.name;
            return request(value(...args), caller, ...args);
        };
    });
}