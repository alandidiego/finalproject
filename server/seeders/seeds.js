const faker = require('faker');

const db = require('../config/connection');
const { User, Post } = require('../models');

db.once('open', async () => {
    await Post.deleteMany({});
    await User.deleteMany({});

    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);

    for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];

        let followerId = userId;
        while (followerId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
            followerId = createdUsers.ops[randomUserIndex];
        }
        await User.updateOne({ _id: userId }, { $addToSet: { followers: followerId } });
    }

    let createdPosts = [];
    for (let i = 0; i < 100; i += 1) {
        const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUserIndex];

        const createdPost = await Post.create({ postText, username });

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { posts: createdPosts._id } }
        );
        createdPosts.push(createdPost);
    }

    for (let i = 0; i < 100; i += 1) {
        const commentBody = faker.lorem.word(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username } = createdUsers.ops[randomUserIndex];

        const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
        const { _id: postId } = createdPosts[randomPostIndex];

        await Post.updateOne(
            { _id: postId },
            { $push: { comments: { commentBody, username } } },
            { runValidators: true }
        );
    }
    console.log('complete');
    process.exit(0);

}


)