/*
/!*let tweets = require('../data/tweets.json');*!/
const dao = require('./tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    }

    const createTweet = (req, res) => {
        dao.createTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet));
    }
    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((tweets) => res.send(tweets));
    }
    const updateTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(tweets => res.send(tweets));
    /!*const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }*!/

    /!*app.put('/api/tweets/:id/like', likeTweet);*!/
    app.put("/rest/tweets/:id", updateTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
};*/

const dao = require('./tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));

    const createTweet = (req, res) =>
        dao.createTweet(req.body)
            .then((createdTweet) => res.json(createdTweet));

    const updateTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));

    app.get("/rest/tweets", findAllTweets);
    app.delete("/rest/tweets/:id", deleteTweet);
    app.post("/rest/tweets", createTweet);
    app.put("/rest/tweets/:id", updateTweet);
};



