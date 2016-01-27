'use strict';

var API = {};

API.list = require('./list').list;
API.live = require('./live').live;

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;