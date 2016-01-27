var path = require('path');
var async = require('async');
var _ = require('lodash');

var utils = require('../lib/utils');


var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});


// TEST START
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('#live()', function () {

    it('SGD as source against USD + THB', function (done) {

        this.timeout(10000);

        var source = 'USD';
        var currencies = ['SGD', 'THB'];

        var liveQuery = {
            source: source,
            currencies: currencies.join(',')
        };

        api.live(liveQuery)
            .then(function (result) {

                assert.equal(2, _.keys(result).length);

                _.each(currencies, function (currency) {
                    var propertyName = source + currency;
                    expect(result).to.have.property(propertyName);
                });

                return done();
            })
            .catch(function (err) {
                return done(err);
            });
    });
});