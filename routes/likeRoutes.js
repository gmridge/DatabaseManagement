const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
   Controllers.likesController.getLikes(res);
})

router.post('/create', (req, res) => {
   Controllers.likesController.createLikes(req.body, res);
})
module.exports = router;

router.put('/:id', (req, res) => {
    Controllers.likesController.updateLikes(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.likesController.deleteLikes(req, res)
})