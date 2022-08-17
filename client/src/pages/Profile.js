import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

import PostsLog from '../components/PostsLog';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};
  console.log(user);
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. 
      </h4>
    );
  }
  return (
    <div>
      <div className="flex-row ">
      <h2 className="display-inline-block">
  Viewing {userParam ? `${user.username}'s` : 'your'} profile.
</h2>
      </div>

      <div className="flex-row justify-space-between ">
        <div className="col-12 col-lg-8">
          <PostsLog posts={user.posts} title={`${user.username}'s posts...`} />
        </div>
      </div>
    </div>
  );
};

export default Profile;