'use strict';

var _ = require('lodash');
var Transporter = require('./transporter');
var APIResult = require('./apirequest-result');


var APIRequest = {};


/**
 * Create and send request to the API
 * @param  {object}   parameters Parameters used to form request
 * @param  {Function} callback   Callback when request finished or error found
 * @return {Request}             Returns Request object or null
 */
var requestFn = function (parameters, callback) {

    var url = parameters.options.secure ? 'https' : 'http';
    url += '://';
    url += parameters.options.host;
    url += '/';
    url += parameters.options.context;
    url += '/';
    url += parameters.options.service;
    url += '?' + parameters.options.key_type + '=' + parameters.options.access_key;

    parameters.options.url = url;


    var req = new Transporter(parameters.options).request(parameters.params, function (err, response) {

        if (err) {
            return callback(err);
        }
        else if (response.statusCode != APIResult.OK || !_.get(response, APIResult.BODY_SUCCESS_EXPR)) {
            err = _.get(response, APIResult.BODY_ERROR_EXPR);
            return callback(err);
        }

        var result = _.get(response, APIResult.BODY_EXPR);

        return callback(null, result);
    });
    return req;
};
APIRequest.request = requestFn;


/**
 * Exports APIRequest
 * @type {Function}
 */
module.exports = APIRequest;