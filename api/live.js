'use strict';

var utils = require('../lib/utils');
var Promise = require('../lib/promise');
var APIResult = require('../lib/apirequest-result');
var APIError = require('../lib/apirequest-error');


// Declare our main module scope
var API = {};


/**
 * Live Currency Rates
 *
 * @param  {object} params - Parameters for request
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Result
 */
API.live = function (params, callback, options) {


    options = utils.defaults({}, options, this.options, {
            service: 'live',
            method: 'GET'
        }
    );


    // Declare the promise we will use to wrap the request call
    var promise = new Promise(function (resolve, reject) {


        // Input Validation (we only do the most basic, and let the server do the most so validation will always be up to date)
        if (!params) {
            return reject(new APIError.MissingArgumentError('live', 'params'));
        }


        // Prepare Parameters and prepare it for the Request modus
        params = {
            options: options,
            params: {
                json: true,
                qs: params
            }
        };


        var APIRequest = require('../lib/apirequest');
        APIRequest.request(params, function (err, result) {

            // If an error happens, we return early
            if (err) {
                return reject(err);
            }

            // parse the results to make the caller only get the actual data and hide the transport information
            result = utils.get(result, APIResult.BODY_LIVE_EXPR);

            // and we resolve and return (not necessary to return, but keeps consistency)
            return resolve(result);
        });
    });


    // Ensure callback is set to make the main functions slightly simpler by avoiding nested conditionals
    callback = callback || utils.noop;

    // We offer callback support in addition to promise style (we know callback is set as we default it in the beginning)
    promise
        .then(function (result) {
            callback(null, result);
        })
        .catch(function (err) {
            callback(err);
        });


    // return the promise to the caller
    return promise;
};


/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;