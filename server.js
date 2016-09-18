/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'ferret',
//     user: 'ferret',
//     password: 'ferret'
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });


var COMMENTS_FILE1 = path.join(__dirname, 'comments_kenny.json');
var COMMENTS_FILE2 = path.join(__dirname, 'comments_cartman.json');
var COMMENTS_FILE3 = path.join(__dirname, 'comments_kairu.json');
var COMMENTS_FILE4 = path.join(__dirname, 'comments_stan.json');
var COMMENTS_FILE5 = path.join(__dirname, 'comments_timy.json');
var USERS_FILE = path.join(__dirname, 'userlist.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/comments', function(req, res) {
    // connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {

    // });
    var file = "";
    var user = req.query.author;
    console.log("get: " + user);
    switch (user) {
        case 'ケニー':
            file = COMMENTS_FILE1;
            break;
        case 'カートマン':
            file = COMMENTS_FILE2;
            break;
        case 'カイル':
            file = COMMENTS_FILE3;
            break;
        case 'スタン':
            file = COMMENTS_FILE4;
            break;
        case 'ティミー':
            file = COMMENTS_FILE5;
            break;
    }
    if (file !== "") {
        fs.readFile(file, function(err, data) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(JSON.parse(data));
        });
    }
});

app.post('/api/comments', function(req, res) {
    var file = "";
    var user = req.body.target;
    console.log("post: " + user);
    switch (user) {
        case 'ケニー':
            file = COMMENTS_FILE1;
            break;
        case 'カートマン':
            file = COMMENTS_FILE2;
            break;
        case 'カイル':
            file = COMMENTS_FILE3;
            break;
        case 'スタン':
            file = COMMENTS_FILE4;
            break;
        case 'ティミー':
            file = COMMENTS_FILE5;
            break;
    }
    if (file === "") {
        return;
    }
    fs.readFile(file, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("post: " + req.body.comment.author);
        var comments = JSON.parse(data);
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        var newComment = {
            id: Date.now(),
            author: req.body.comment.author,
            text: req.body.comment.text,
            img: req.body.comment.img,
        };
        comments.push(newComment);
        fs.writeFile(file, JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});

app.get('/api/userlist', function(req, res) {
    fs.readFile(USERS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});