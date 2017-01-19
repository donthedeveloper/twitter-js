const selectAllTweets = () => {
    return 'SELECT * FROM tweets INNER JOIN users ON tweets.user_id = users.id'
}

module.exports = {
    selectAllTweets: selectAllTweets
}
