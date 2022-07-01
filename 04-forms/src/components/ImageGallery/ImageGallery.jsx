import { Component } from 'react';

import Button from 'components/Button/Button';
import LightBox from 'components/LightBox/LightBox';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import { fetchImages } from 'services/fetchImages';

class ImageGallery extends Component {
  state = {
    images: [],
    slide: 0,
  };
  componentDidUpdate(prevProps, prevState) {}

  fetchPhotos = () => {
    fetchImages('ocean', 1).then((res) =>
      this.setState({ images: res.hits })
    );
  };

  open = (img) =>
    this.setState((prev) => ({
      slide: this.bigImages(prev.images).indexOf(img) + 1,
      isShow: !prev.isShow,
    }));

  bigImages = (images) =>
    images.map((el) => el.largeImageURL);

  render() {
    const { images, slide, isShow } = this.state;
    const { fetchPhotos, bigImages, open } = this;

    return (
      <>
        {images?.length ? (
          <>
            <LightBox
              images={bigImages(images)}
              slide={slide}
              isShow={isShow}
            />
            <div className={s.imageGallery}>
              {images.map((image) => (
                <ImageGalleryItem
                  key={image.webformatURL}
                  small={image.webformatURL}
                  big={image.largeImageURL}
                  onClickImg={open}
                />
              ))}
            </div>
          </>
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
