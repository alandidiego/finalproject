import React from 'react';
import { Link } from 'react-router-dom';

const PostsLog = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>Create New Post</h3>;
  }

  return (
    <div className="flex-row justify-space-between">
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card">
            <p className="card-header">
              <Link 
              to={`/profile/${post.username}`}>
                {post.username}
              </Link>{' '}
              posted on {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.postText}</p>
              <p className="mb-0">
                Comments: {post.commentCount} 
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostsLog;