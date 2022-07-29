import { useEffect } from 'react';

const GoogleForm = ({ googleAuthLayout }) => {
  useEffect(() => {
    //     document.querySelector('#modal').innerHTML =
    //       googleAuthLayout;
    console.log('googleAuthLayout', googleAuthLayout);
    document
      .querySelector('#modal')
      .insertAdjacentHTML('afterbegin', googleAuthLayout);
  }, [googleAuthLayout]);

  return <div id='modal'></div>;
};

export default GoogleForm;
