import _ from 'lodash';
import request from './_request';

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

module.exports = {
    chats: wrap(chats),
    comments: wrap(comments),
    criteria: wrap(criteria),
    entities: wrap(entities),
    feed: wrap(feed),
    gallery: wrap(gallery),
    messages: wrap(messages),
    notifications: wrap(notifications),
    posts: wrap(posts),
    properties: wrap(properties),
    scores: wrap(scores),
    search: wrap(search),
    spheres: wrap(spheres),
    users: wrap(users)
};

function wrap(collection) {
    return _.mapValues(collection, value => {
        return (...args) => request(value(...args));
    });
}