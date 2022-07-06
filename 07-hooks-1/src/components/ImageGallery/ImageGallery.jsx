import { useEffect, useState, useCallback } from 'react';
// import { Component, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Button from 'components/Button/Button';
import LightBox from 'components/LightBox/LightBox';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
// import { fetchImages } from 'services/fetchImages';
import Container from 'components/Container/Container';
import methods from 'services/fetchImages';
import Loader from 'components/Loader/Loader';

const constants = {
  IMAGES: 'IMAGES',
};

const StatusCode = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const { getDogsImages } = methods;

// const ImageGallery = () => {
//   const [first, setfirst] = useState(1);

//   useEffect(() => {
//     console.log('component mount++++++++');
//     return () => console.log('component unmount---------');
//   }, [first]);

//   return (
//     <>
//       <button
//         style={{ padding: '20px' }}
//         type='button'
//         onClick={() => {
//           setfirst(first + 1);
//         }}>
//         {first}
//       </button>
//     </>
//   );
// };

const ImageGallery = ({ perPage, onChange }) => {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(StatusCode.IDLE);

  const handleClick = () => {
    console.log('click');
  };

  const toogleModal = (img) => {
    const index = images.indexOf(img) + 1;
    console.log('index', index);
    setIsShow(!isShow);
    setSlide(index);
  };

  const fetchPhotos = useCallback(async () => {
    setIsLoading(true);
    setError('');

    await getDogsImages(perPage)
      .then((result) => {
        if (result.status === 200) {
          setImages((prev) => [
            ...prev,
            ...result.data.message,
          ]);
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
  }, [perPage]);

  useEffect(() => {
    const imagesFromStorage = JSON.parse(
      localStorage.getItem(constants.IMAGES)
    );

    if (imagesFromStorage) {
      imagesFromStorage.length
        ? this.setState({ images: imagesFromStorage })
        : fetchPhotos();
      return;
    }

    fetchPhotos();

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [fetchPhotos]);

  // const fetchPhotos = async (county) => {
  //   setIsLoading(true);
  //   error && setError('');

  //   await getDogsImages(county)
  //     .then((result) => {
  //       if (result.status === 200) {
  //         setImages([...images, ...result.data.message]);
  //         setStatus(StatusCode.SUCCESS);
  //         return;
  //       } else {
  //         setError('Bad request');
  //         setStatus(StatusCode.ERROR);
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setStatus(StatusCode.ERROR);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  const handleChange = ({ target: { name, value } }) =>
    onChange(Number(value));
  // this.setState({ [name]: Number(value) });

  return (
    <Container addedStyle={{ flexDirection: 'column' }}>
      {status === StatusCode.IDLE ? (
        <Button
          title='Get images'
          handleClick={fetchPhotos}
        />
      ) : (
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
      )}
      {/* <ToastContainer /> */}
      {isLoading ? (
        // status === StatusCode.PENDING
        <Loader />
      ) : null}
      <Container>
        {status === StatusCode.ERROR ? (
          <h3>{error}</h3>
        ) : null}
      </Container>
    </Container>
  );
};

export default ImageGallery;

// class ImageGallery extends Component {
//   state = {
//     images: [],
//     slide: 0,
//     perPage: 3,
//     timerId: '',
//     isLoading: false,
//     error: '',
//     status: StatusCode.IDLE,
//   };

//   handleClick = () => {
//     console.log('click');
//   };

//   componentDidMount() {
//     const { perPage } = this.state;
//     const { fetchPhotos } = this;
//     const imagesFromStorage = JSON.parse(
//       localStorage.getItem(constants.IMAGES)
//     );
//     // console.log(
//     //   'componentDidMount storage :>> ',
//     //   imagesFromStorage
//     // );

//     if (imagesFromStorage) {
//       imagesFromStorage.length
//         ? this.setState({ images: imagesFromStorage })
//         : fetchPhotos(perPage);
//       return;
//     }
//     // console.log('componentDidMount');
//     fetchPhotos(perPage);
//     // const id = setInterval(() => {
//     //   console.log('TIMEOUT IS OVER>>>>>>>>>>>>>>>>');
//     // }, 2000);
//     // this.setState({ timerId: id });
//     document.addEventListener('click', this.handleClick);
//   }

//   componentWillUnmount() {
//     // clearInterval(this.state.timerId);
//     document.removeEventListener('click', this.handleClick);
//     localStorage.setItem(
//       constants.IMAGES,
//       JSON.stringify(null)
//     );
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return true;
//     // return this.props.perPage !== nextProps.perPage
//     //   ? true
//     //   : false;
//     // this.props in shouldComponentUpdate === prevProps from componentDidUpdate
//     // nextProps === props before update, this.props===props from last render
//   }

//   // componentDidUpdate(a, b, c) {
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log('prevState :>> ', prevState);
//     // console.log('this.state :>> ', this.state);
//     // console.log('componentDidUpdate');
//     if (
//       prevState.perPage !== this.state.perPage ||
//       prevProps.perPage !== this.props.perPage
//     ) {
//       this.fetchPhotos(this.props.perPage);
//     }
//   }

//   fetchPhotos = async (perPage) => {
//     this.setState({
//       isLoading: true,
//       error: '',
//       //  status: StatusCode.PENDING
//     });
//     // const res = getDogsImages(perPage).catch((err) =>
//     //   console.log('err', err)
//     // );
//     // console.log('res>>>', res);
//     await getDogsImages(perPage)
//       .then((result) => {
//         if (result.status === 200) {
//           this.setState((prev) => {
//             const resArr = [
//               ...prev.images,
//               ...result.data.message,
//             ];
//             localStorage.setItem(
//               constants.IMAGES,
//               JSON.stringify(resArr)
//             );
//             return {
//               images: resArr,
//               status: StatusCode.SUCCESS,
//             };
//           });
//           return;
//         } else {
//           this.setState({
//             error: 'Bad request',

//             status: StatusCode.ERROR,
//           });
//         }
//       })
//       .catch((err) =>
//         this.setState({
//           error: err.message,

//           status: StatusCode.ERROR,
//         })
//       )
//       .finally(() =>
//         this.setState({
//           isLoading: false,
//         })
//       );

//     // fetchImages(perPage).then((res) => {
//     //   // console.log('res.message', res.message);

//     //   this.setState({ images: res.message });
//     // localStorage.setItem(
//     //   constants.IMAGES,
//     //   JSON.stringify(res.message)
//     // );
//     // });
//   };

//   toogleModal = (img) =>
//     this.setState((prev) => ({
//       slide: prev.slide ? 1 : prev.images.indexOf(img) + 1,
//       isShow: !prev.isShow,
//     }));

//   handleChange = ({ target: { name, value } }) =>
//     this.props.onChange(Number(value));
//   // this.setState({ [name]: Number(value) });

//   toggleLoading = () =>
//     this.setState((prev) => ({
//       isLoading: !prev.isLoading,
//     }));

//   render() {
//     const {
//       images,
//       slide,
//       isShow,
//       perPage,
//       status,
//       error,
//       isLoading,
//     } = this.state;
//     const { fetchPhotos, toogleModal, handleChange } = this;

//     // console.log('images :>> ', images);
//     // console.log(
//     //   'fetchImages() :>> ',
//     //   fetchImages(6).then(
//     //     (res) => {
//     //       console.log('res.message', res.message);
//     //     }
//     //     // this.setState({ images: res.message })
//     //     // )
//     //   )
//     // );
//     return (
//       <Container addedStyle={{ flexDirection: 'column' }}>
//         {status === StatusCode.IDLE ? (
//           <Button
//             title='Get images'
//             handleClick={fetchPhotos}
//           />
//         ) : (
//           <>
//             <Container>
//               <LightBox
//                 images={images}
//                 slide={slide}
//                 isShow={isShow}
//               />
//               <div className={s.imageGallery}>
//                 {images?.map((image) => (
//                   <ImageGalleryItem
//                     key={image}
//                     small={image}
//                     big={image}
//                     onClickImg={toogleModal}
//                   />
//                 ))}
//               </div>
//             </Container>
//             {status === StatusCode.SUCCESS ? (
//               <Container>
//                 <select
//                   name='perPage'
//                   defaultValue={perPage}
//                   onChange={handleChange}>
//                   <option value={3}>3</option>
//                   <option value={5}>5</option>
//                   <option value={10}>10</option>
//                 </select>
//               </Container>
//             ) : null}
//           </>
//         )}
//         {/* <ToastContainer /> */}
//         {isLoading ? (
//           // status === StatusCode.PENDING
//           <Loader />
//         ) : null}
//         <Container>
//           {status === StatusCode.ERROR ? (
//             <h3>{error}</h3>
//           ) : null}
//         </Container>
//       </Container>
//     );
//   }
// }

// export default ImageGallery;
