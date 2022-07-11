import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios(
      'https://jsonplaceholder.typicode.com/posts'
    ).then(({ data }) => setPosts(data.slice(0, 5)));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          const { id, title } = post;
          return (
            <li key={id}>
              <Link to={`/posts/${id}`} state={{ post }}>
                <h4>{title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Posts;
