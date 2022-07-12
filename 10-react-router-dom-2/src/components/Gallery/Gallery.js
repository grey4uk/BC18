import { useEffect, useMemo, useState } from 'react';

import {
  //   useLocation,
  useSearchParams,
} from 'react-router-dom';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  //   const location = useLocation();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  console.log('params', params.query);

  const searchImages = async () => {
    try {
      const {
        data: { hits },
      } = await axios.get(
        `https://pixabay.com/api/?key=15313425-bc0f61e46a051ea2578b0fd6a&q=${query}&image_type=photo`
      );
      setImages(hits);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    searchImages();
  }, []);

  return (
    <>
      {images.length &&
        images.map(({ id, webformatURL }) => (
          <img
            key={id}
            src={webformatURL}
            alt='alt'
            width='300'
          />
        ))}
    </>
  );
};

export default Gallery;
