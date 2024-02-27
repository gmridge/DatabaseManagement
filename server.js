const express = require("express");
const app = express();

require("dotenv").config()
let dbConnect = require("./dbConnect");

app.use(express.json())

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let blogPostRoutes = require('./routes/blogPostRoutes');
app.use('/api/blogPosts', blogPostRoutes);

let commentRoutes = require('./routes/commentRoutes');
app.use('/api/comments', commentRoutes);

let likeRoutes = require('./routes/likeRoutes');
app.use('/api/likes', likeRoutes);

// parse requests of content-type - application/json
app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." })
})

// set port, listen for requests
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`)
})
