import FsLightbox from 'fslightbox-react';

const LightBox = ({ isShow, slide, images }) => {
  return (
    <FsLightbox
      toggler={isShow}
      sources={images}
      slide={slide}
    />
  );
};

export default LightBox;
