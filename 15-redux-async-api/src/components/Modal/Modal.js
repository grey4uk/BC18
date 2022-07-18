import { useAddMyImageMutation } from 'redux/myGallery/myGallery';

import Loader from 'components/Loader/Loader';

const Modal = ({ el, toogleImgClick }) => {
  const [saveImage, { error, isLoading }] =
    useAddMyImageMutation();

  const onClose = (e) => {
    if (e.target === e.currentTarget) {
      toogleImgClick();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,.4)',
      }}
      onClick={onClose}>
      <img
        src={el}
        alt={el}
        width='300'
        onClick={() => saveImage(el)}
      />
      {isLoading ? <Loader /> : null}
      {error ? <h3>Photo didn't saved</h3> : null}
    </div>
  );
};

export default Modal;
