// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { constants } from 'helpers';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  // useEffect(() => {
  //   (async () => {
  //     const {
  //       data: { hits },
  //     } = await axios.get(
  //       `https://pixabay.com/api/?key=15313425-bc0f61e46a051ea2578b0fd6a&q=${query}&image_type=photo`
  //     );
  //     console.log('hits', hits);
  //   })();
  // }, []);

  const { gallery } = constants;

  const findImages = async (e) => {
    e.preventDefault();
    navigate(`/${gallery}?query=${query}`);
    // try {
    //   const {
    //     data: { hits },
    //   } = await axios.get(
    //     `https://pixabay.com/api/?key=15313425-bc0f61e46a051ea2578b0fd6a&q=${query}&image_type=photo`
    //   );
    //   navigate(`/${gallery}?query=${query}`, {
    //     state: { hits },
    //   });
    // } catch (error) {
    //   console.log('error', error);
    // }
  };

  return (
    <section>
      <h1>HOME</h1>
      <form onSubmit={findImages}>
        <input
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <Outlet />
    </section>
  );
};

export default HomePage;
