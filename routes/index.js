'use strict';
var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var client = require('../db/index.js');
var queries = require('../db/queries.js');


module.exports = function makeRouterWithSockets (io) {

  // a reusable function
  function respondWithAllTweets (req, res, next){
    // var allTheTweets = tweetBank.list();
    // res.render('index', {
    //   title: 'Twitter.js',
    //   tweets: allTheTweets,
    //   showForm: true
    // });
    client.query(queries.selectAllTweets(), (err, result) => {
        if (err) return next(err);
        var tweets = result.rows;
        // console.log(tweets);
        res.render('index', {title: 'Twitter.js', tweets: tweets, showForm: true});
    });
  }

  // here we basically treet the root view and tweets view as identical
  router.get('/', respondWithAllTweets);
  router.get('/tweets', respondWithAllTweets);

  // single-user page
  router.get('/users/:username', function(req, res, next){
    // var tweetsForName = tweetBank.find({ name: req.params.username });
    // res.render('index', {
    //   title: 'Twitter.js',
    //   tweets: tweetsForName,
    //   showForm: true,
    //   username: req.params.username
    // });
    var username = req.params.username;
    client.query(queries.selectUserTweets(username), (err, result) => {
        if (err) return next(err);
        var tweets = result.rows;

        res.render('index', {title: 'Twitter.js', tweets: tweets, showForm: true});
    });
  });

  // single-tweet page
  router.get('/tweets/:id', function(req, res, next){
      var tweetid = req.params.id;
      client.query(queries.selectTweet(tweetid), (err, result) => {
            if(err) return next(err);
            var tweets = result.rows;
            // console.log(tweets);
            res.render('index', {title: 'Twitter.js', tweets: tweets, showForm: true});
      })
  });

  // create a new tweet
  router.post('/tweets', function(req, res, next){
    // var newTweet = tweetBank.add(req.body.name, req.body.text);
    // io.sockets.emit('new_tweet', newTweet);

    var username = req.body.name;

    client.query(queries.doesUserExist(username), (err, result) => {
        if (err) return next(err);
        var users = result.rows;

        console.log('THIS IS USERS', users);
        console.log(req.body.text);

        if (users.length) {
            client.query(queries.insertTweet(users.id, req.body.text), (err, result) => {

            });
        }

        // res.render('index', {title: 'Twitter.js', tweets: tweets, showForm: true});
    });

    res.redirect('/');
  });

  // // replaced this hard-coded route with general static routing in app.js
  // router.get('/stylesheets/style.css', function(req, res, next){
  //   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
  // });

  return router;
}
