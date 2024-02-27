const BlogPost = require('./user');
const Comment = require('./user');
const Likes = require('./user');

'use strict'
const User = require('./user') //require the model
async function init() {
    await User.sync(); // sync the model
    // also sync any extra models here
};
init();
module.exports = {
    User, BlogPost, Comment, Likes
};
