var path = require('path');
var moment = require('moment');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});


// LIVE
var listQuery = {};
api.list(listQuery, function (err, result) {
    if (err) {
        return console.log('List Callback (Error): ' + JSON.stringify(err));
    }
    console.log('List Callback (Result): ' + JSON.stringify(result));
});

// LIVE
var liveQuery = {
    source: 'SGD',
    currencies: ['USD', 'THB']
};
var liveOptions = {refreshRate: moment.duration(3, 'seconds').asMilliseconds()};
api.live(liveQuery, function (err, result) {
    if (err) {
        return console.log('Live Callback (Error): ' + JSON.stringify(err));
    }
    console.log('Live Callback (Result): ' + JSON.stringify(result));
}, liveOptions || null);

(function wait() {
    if (true) setTimeout(wait, 10000);
})();