"use strict";
let Models = require("../models"); // matches index.js

const getBlogPost = (res) => {
  // finds all blog posts
  Models.BlogPost.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createBlogPost = (data, res) => {
  // creates a new BlogPost using JSON data POSTed in request body
  console.log(data);
  new Models.BlogPost
(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateBlogPost = (req, res) => {
  // updates the BlogPost matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.BlogPost
.findByIdAndUpdate(req.params.id, req.body, {
    new: true})
    .then((data) => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    })
}
const deleteBlogPost = (req, res) => {
  // deletes the BlogPost matching the ID from the param
  Models.BlogPost
.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message })
    })
}

module.exports = {
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
};