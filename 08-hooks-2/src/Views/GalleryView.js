import { useState } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const GalleryView = () => {
  const [page, setPage] = useState(3);
  const changePage = (value) => setPage(value);
  return (
    <ImageGallery perPage={page} onChange={changePage} />
  );
};

export default GalleryView;
