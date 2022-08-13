import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import PostsLog from '../components/PostsLog';


const Home = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);

    return (
        <main>
            <div className='flex-row justify-space-between container'>
                <div className='col-12 mb-3'>

                    {loading ? (
                        <div>loading..</div>
                    ) : (
                        <PostsLog posts={posts} title="In the Abyss" />
                    )
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;