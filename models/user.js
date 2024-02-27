const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }
// Sequelize will create this table if it doesn't exist on startup
User.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    lastName: {
        type: DataTypes.STRING, allowNull: false, required: true
}, emailId: {
        type: DataTypes.STRING, allowNull: false, required: true,
unique: true
    },
    password: {
        type: DataTypes.STRING, allowNull: false, required: true
    }},
    {
        sequelize: sequelizeInstance, modelName: 'users', // use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)

class BlogPost extends Model { }
BlogPost.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    content: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    }
}, {
    sequelize: sequelizeInstance, modelName: 'blogPosts', // use lowercase plural format
    timestamps: true, freezeTableName: true
})

class Comment extends Model { }
Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
    },
    content: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    blogPostId: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    }
}, {
    sequelize: sequelizeInstance, modelName: 'comments', // use lowercase plural format
    timestamps: true, freezeTableName: true
})

class Likes extends Model { }
Likes.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    blogPostId: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    }
}, {
    sequelize: sequelizeInstance, modelName: 'likes', // use lowercase plural format
    timestamps: true, freezeTableName: true
})

// checked, completion receipt for exercise 3

module.exports = User;
module.exports = BlogPost;
module.exports = Comment;
module.exports = Likes;
