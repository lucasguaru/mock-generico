const request = require('request');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log(req.method + " " + req.url);
    if (mockObj.hasOwnProperty(req.method + req.url)) {
        let mock = mockObj[req.method + req.url];
        res.json(mock.response);
        res.end();
    } else {
        next();
    }
});
let mockObj = {};
app.post('/mock', (req, res) => {
    var corpo = req.body;
    console.log('* /mock', corpo.method + " " + corpo.url);
    if (mockObj.hasOwnProperty(corpo.method + corpo.url)) {
        mockObj[corpo.method + corpo.url] = corpo;
    } else {
        mockObj[corpo.method + corpo.url] = corpo;
    }
    res.status(200).end();
});
app.listen(3000, () => {
    console.log("Listening on port 3000");
});