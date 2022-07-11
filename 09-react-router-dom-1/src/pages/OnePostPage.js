import { useLocation, useParams } from 'react-router-dom';

// import Post from 'components/Post';

const OnePostPage = () => {
  const location = useLocation();
  const params = useParams();

  console.log('params', params);

  console.log('location', location);

  const {
    state: { post },
  } = location;

  const { title, body } = post;

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    //     <Post
    //       title={title ? title : 'noname'}
    //       body={body ? body : 'no description'}
    //     />
  );
};

export default OnePostPage;
