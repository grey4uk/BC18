import { useEffect, useState } from 'react';
import {
  //   useGetDogsImagesQuery,
  useLazyGetDogsImagesQuery,
} from 'redux/gallery/galleryApi';
import Modal from 'components/Modal';
import {
  useGetMyImagesQuery,
  useDeleteMyImageMutation,
} from 'redux/myGallery/myGallery';

const Gallery = () => {
  const [perPage, setPerPage] = useState(0);
  const [photo, setPhoto] = useState('');
  const [chooseGallery, setChooseGallery] = useState([]);

  const [deleteImage] = useDeleteMyImageMutation();
  //   const {
  //     data,
  //     error,
  //     isFetching: loading,
  //     refetch: refetchDogsImages,
  //   } = useGetDogsImagesQuery(null, { skip: !perPage });
  const [
    getDogsImages,
    { data: images, error, isFetching: loading },
  ] = useLazyGetDogsImagesQuery();

  const { data: myImages } = useGetMyImagesQuery();

  useEffect(() => {
    images && setChooseGallery(images);
  }, [images]);

  const toogleImgClick = (e) =>
    setPhoto(photo ? '' : e.target.id);

  const isMyGallery = () =>
    typeof chooseGallery[0] === 'object' ? true : false;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column' }}>
      {loading ? <p>LOADING.........</p> : null}
      {error ? <h2>Something wrong</h2> : null}
      {!!chooseGallery?.length && isMyGallery()
        ? myImages?.map(({ image, id }) => (
            <>
              <img
                key={id}
                src={image}
                id={image}
                alt={image}
                width='300'
              />
              <button
                type='button'
                onClick={() => deleteImage(id)}>
                delete
              </button>
            </>
          ))
        : chooseGallery.map((image) => (
            <img
              key={image}
              src={image}
              id={image}
              alt={image}
              width='300'
              onClick={toogleImgClick}
            />
          ))}

      {photo ? (
        <Modal toogleImgClick={toogleImgClick} el={photo} />
      ) : null}
      <select
        name='perPage'
        onChange={(e) => {
          const count = Number(e.currentTarget.value);
          getDogsImages(count);
          setPerPage(count);
        }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <button
        type='button'
        onClick={() => setChooseGallery(myImages)}>
        Show my gallery
      </button>
      <button
        type='button'
        onClick={() => getDogsImages(perPage)}>
        find fotos again
      </button>
    </div>
  );
};

export default Gallery;
