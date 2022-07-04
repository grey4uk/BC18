import { Component } from 'react';

import Button from 'components/Button/Button';
import LightBox from 'components/LightBox/LightBox';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import { fetchImages } from 'services/fetchImages';
import Container from 'components/Container/Container';

const constants = {
  IMAGES: 'IMAGES',
};

class ImageGallery extends Component {
  state = {
    images: [],
    slide: 0,
    perPage: 3,
    timerId: '',
  };

  handleClick = () => {
    console.log('click');
  };

  componentDidMount() {
    const { perPage } = this.state;
    const { fetchPhotos } = this;
    const imagesFromStorage = JSON.parse(
      localStorage.getItem(constants.IMAGES)
    );
    console.log(
      'componentDidMount storage :>> ',
      imagesFromStorage
    );

    if (imagesFromStorage) {
      imagesFromStorage.length
        ? this.setState({ images: imagesFromStorage })
        : fetchPhotos(perPage);
      return;
    }
    fetchPhotos(perPage);
    // const id = setInterval(() => {
    //   console.log('TIMEOUT IS OVER>>>>>>>>>>>>>>>>');
    // }, 2000);
    // this.setState({ timerId: id });
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    // clearInterval(this.state.timerId);
    document.removeEventListener('click', this.handleClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // return this.props.perPage !== nextProps.perPage
    //   ? true
    //   : false;
    // this.props in shouldComponentUpdate === prevProps from componentDidUpdate
    // nextProps === props before update, this.props===props from last render
  }

  // componentDidUpdate(a, b, c) {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('prevState :>> ', prevState);
    console.log('this.state :>> ', this.state);
    if (
      prevState.perPage !== this.state.perPage ||
      prevProps.perPage !== this.props.perPage
    ) {
      this.fetchPhotos(this.props.perPage);
    }
  }

  fetchPhotos = (perPage) => {
    fetchImages(perPage).then((res) => {
      // console.log('res.message', res.message);

      this.setState({ images: res.message });
      localStorage.setItem(
        constants.IMAGES,
        JSON.stringify(res.message)
      );
    });
  };

  open = (img) => {};
  // this.setState((prev) => ({
  //   slide: this.bigImages(prev.images).indexOf(img) + 1,
  //   isShow: !prev.isShow,
  // }));

  bigImages = (images) => {};
  // images.map((el) => el.largeImageURL);

  handleChange = ({ target: { name, value } }) =>
    this.props.onChange(Number(value));
  // this.setState({ [name]: Number(value) });

  render() {
    const { images, slide, isShow, perPage } = this.state;
    const { fetchPhotos, bigImages, open, handleChange } =
      this;
    console.log('perPage :>> ', perPage);
    // console.log('images :>> ', images);
    // console.log(
    //   'fetchImages() :>> ',
    //   fetchImages(6).then(
    //     (res) => {
    //       console.log('res.message', res.message);
    //     }
    //     // this.setState({ images: res.message })
    //     // )
    //   )
    // );
    return (
      <>
        {images?.length ? (
          <Container
            addedStyle={{ flexDirection: 'column' }}>
            <Container>
              <LightBox
                images={bigImages(images)}
                slide={slide}
                isShow={isShow}
              />
              <div className={s.imageGallery}>
                {images.map((image) => (
                  <ImageGalleryItem
                    key={image}
                    small={image}
                    big={image}
                    onClickImg={open}
                  />
                ))}
              </div>
            </Container>
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
          </Container>
        ) : (
          <Button
            title='Get images'
            handleClick={fetchPhotos}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
