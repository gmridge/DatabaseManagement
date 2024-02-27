const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Adds a GET route to return all blog posts
router.get('/', (req, res) => {
   Controllers.blogPostController.getBlogPost(res);
})

// Adds a POST route to create a blog post
router.post('/create', (req, res) => {
   Controllers.blogPostController.createBlogPost(req.body, res);
})
module.exports = router;

router.put('/:id', (req, res) => {
    Controllers.blogPostController.updateBlogPost(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.blogPostController.deleteBlogPost(req, res)
})
