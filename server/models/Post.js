const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    postText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp),
    },
    username: {
        type: String,
        required: true
    },
    comments: [commentSchema]
},
    {
        toJSON: {
            getters: true
        }
    }
);

postSchema.virtual('commentCount').get(function(){
    return this.comments.length;
});
const Post = model('Post', postSchema);

module.exports = Post;