import {
  useEffect,
  useState,
  useCallback,
  // useMemo,
} from 'react';
// import { Component, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import LightBox from 'components/LightBox/LightBox';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import Container from 'components/Container/Container';
import methods from 'services/fetchImages';
import Loader from 'components/Loader/Loader';
import useLocalStorage from './../../hooks/useLocalStorage';
import { constants } from 'helpers/constants';

const StatusCode = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const { getDogsImages } = methods;

const ImageGallery = ({ perPage, onChange }) => {
  const [storage, setStorage] = useLocalStorage();
  const [images, setImages] = useState(
    storage ? storage[constants.IMAGES] : []
  );
  const [slide, setSlide] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(StatusCode.IDLE);

  const handleClick = () => {
    console.log('click');
  };

  // const s = 'super';
  // const numbersArray = [1, 2, 3, 4, 5];
  // const amount = useMemo(
  //   () =>
  //     numbersArray.reduce((acc, el) => {
  //       console.log('run>>>');
  //       return acc + el;
  //     }),
  //   [perPage]
  // );
  // console.log('amount :>> ', amount);

  const toogleModal = (img) => {
    const index = images.indexOf(img) + 1;
    setIsShow(!isShow);
    setSlide(index);
  };

  // console.log('storage :>> ', storage);

  const fetchPhotos = useCallback(() => {
    setIsLoading(true);
    setError('');
    getDogsImages(perPage)
      .then((result) => {
        if (result.status === 200) {
          setImages((prev) => {
            const array = [...prev, ...result.data.message];
            setStorage({
              [constants.IMAGES]: array,
            });
            return array;
          });
          setStatus(StatusCode.SUCCESS);

          return;
        } else {
          setError('Bad request');
          setStatus(StatusCode.ERROR);
        }
      })
      .catch((err) => {
        setError(err.message);
        setStatus(StatusCode.ERROR);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  useEffect(() => {
    if (!storage?.length) {
      fetchPhotos();
      return;
    }
    storage?.length ? setImages(storage) : fetchPhotos();

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPhotos]);

  // useEffect(() => {

  //   const fetchPhotos=async () => {
  //     setIsLoading(true);
  //     setError('');

  //     await getDogsImages(perPage)
  //       .then((result) => {
  //         if (result.status === 200) {
  //           setImages((prev) => [
  //             ...prev,
  //             ...result.data.message,
  //           ]);
  //           setStatus(StatusCode.SUCCESS);
  //           return;
  //         } else {
  //           setError('Bad request');
  //           setStatus(StatusCode.ERROR);
  //         }
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setStatus(StatusCode.ERROR);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }
  //   const imagesFromStorage = JSON.parse(
  //     localStorage.getItem(constants.IMAGES)
  //   );

  //   if (imagesFromStorage) {
  //     imagesFromStorage.length
  //       ? this.setState({ images: imagesFromStorage })
  //       : fetchPhotos();
  //     return;
  //   }

  //   fetchPhotos();

  //   document.addEventListener('click', handleClick);
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, [perPage]);

  const handleChange = ({ target: { name, value } }) =>
    // setPerPage(Number(value));
    onChange(Number(value));

  return (
    <Container addedStyle={{ flexDirection: 'column' }}>
      <>
        <Container>
          <LightBox
            images={images}
            slide={slide}
            isShow={isShow}
          />
          <div className={s.imageGallery}>
            {images?.map((image) => (
              <ImageGalleryItem
                key={image}
                small={image}
                big={image}
                onClickImg={toogleModal}
              />
            ))}
          </div>
        </Container>
        {status === StatusCode.SUCCESS ? (
          <Container>
            <select
              name='perPage'
              defaultValue={perPage}
              onChange={handleChange}>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </Container>
        ) : null}
      </>
      {isLoading ? (
        // status === StatusCode.PENDING
        <Loader />
      ) : null}
      <Container>
        {status === StatusCode.ERROR ? (
          <h3>{error}</h3>
        ) : null}
        {/* <ToastContainer /> */}
      </Container>
    </Container>
  );
};

export default ImageGallery;
