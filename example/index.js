var path = require('path');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});


// LIVE

var liveQuery = {
};

api.live(liveQuery, function (err, result) {
    if (err) {
        return console.log('Live Callback (Error): ' + JSON.stringify(err));
    }
    console.log('Live Callback (Result): ' + JSON.stringify(result));
});