// const selectAllTweets = () => {
//     return 'SELECT users.id AS user_id, users.name, users.picture_url, tweets.id AS tweet_id, tweets.content FROM tweets INNER JOIN users ON tweets.user_id = users.id'
// };
//
// const selectUserTweets = (username) => {
//     return 'SELECT users.id AS user_id, users.name, users.picture_url, tweets.id AS tweet_id, tweets.content FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE users.name = \'' + username + '\'';
// };
//
// const selectTweet = (id) => {
//     return 'SELECT users.id AS user_id, users.name, users.picture_url, tweets.id AS tweet_id, tweets.content FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE tweets.id =' + id;
// };
//

const selectAllTweets = () => {

    return 'SELECT tweets.*, users.name, users.picture_url FROM tweets INNER JOIN users ON tweets.user_id = users.id'
};

const selectUserTweets = (username) => {
    return 'SELECT tweets.*, users.name, users.picture_url FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE users.name = \'' + username + '\'';
};

const selectTweet = (id) => {
    return 'SELECT tweets.*, users.name, users.picture_url FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE tweets.id =' + id;
};




module.exports = {
    selectAllTweets: selectAllTweets,
    selectUserTweets: selectUserTweets,
    selectTweet: selectTweet

}
