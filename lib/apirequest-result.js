'use strict';

var ResultStatus = {};

ResultStatus.OK = 200;

ResultStatus.BODY_RESULTS_EXPR = 'body.results';
ResultStatus.BODY_SUCCESS_EXPR = 'body.success';
ResultStatus.BODY_ERROR_EXPR = 'body.error';

ResultStatus.BODY_LIST_EXPR = 'body.currencies';
ResultStatus.BODY_LIVE_EXPR = 'body.quotes';

/**
 * Exports ResultStatus
 * @type {Function}
 */
module.exports = ResultStatus;