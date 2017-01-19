const selectAllTweets = () => {
    return 'SELECT * FROM tweets INNER JOIN users ON tweets.user_id = users.id'
};

const selectUserTweets = (username) => {
    return 'SELECT * FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE users.name = \'' + username + '\'';
};

const selectTweet = (id) => {
    return 'SELECT * FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE tweets.id =' + id;
};




module.exports = {
    selectAllTweets: selectAllTweets,
    selectUserTweets: selectUserTweets,
    selectTweet: selectTweet

}
