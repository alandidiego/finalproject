import React from 'react';

const PostsLog = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>Create New Post</h3>;
  }

  return (
    <div className="flex-row justify-space-between">
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              {post.username}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.postText}</p>
              <p className="mb-0">
                Comments: {post.commentCount} || Click to{' '}
                {post.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostsLog;