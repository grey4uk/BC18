import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getGalleryImages,
  galleryItemsSelector,
  galleryLoadingSelector,
  galleryErrorSelector,
} from 'redux/gallery';

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) =>
    galleryItemsSelector(state)
  );
  const loading = useSelector(galleryLoadingSelector);
  const error = useSelector(galleryErrorSelector);
  useEffect(() => {
    dispatch(getGalleryImages());
  }, [dispatch]);

  return (
    <>
      {loading ? <p>LOADING.........</p> : null}
      {error ? <h2>{error}</h2> : null}
      {images.length
        ? images.map((el) => (
            <img key={el} src={el} alt={el} width='300' />
          ))
        : null}
    </>
  );
};

export default Gallery;
