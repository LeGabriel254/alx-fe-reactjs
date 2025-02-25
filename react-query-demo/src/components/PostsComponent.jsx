import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetching Post failed', error);
    throw error;
  } finally {
    console.log('Fetch attempt completed');
  }

};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data stays fresh for 5 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
