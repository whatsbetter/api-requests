import config from 'config';

import request from 'api-helpers/request';
import requestGroup from 'api-helpers/requestGroup';
import queue from 'api-helpers/queue';
import toGqlRequest from 'api-helpers/toGqlRequest';

const pictures = require('./pictures');

const wrap = toGqlRequest.bind(null, config.galleriesServer, {});

module.exports = {
    pictures: wrap(pictures, 'pictures')
};

