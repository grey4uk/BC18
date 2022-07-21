// export function fetchImages(county = 5) {
//   return fetch(
//     `https://dog.ceo/api/breeds/image/random/${county}`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error(`Nothing is there `));
//   });
// }

import axios from 'axios';

// axios.defaults.baseURL = 'https://dog.ceo/api/breeds/image';

const getDogsImages = async (county) => {
  return await axios(
    `https://dog.ceo/api/breeds/image/random/${county}`
  );
};

const methods = { getDogsImages };

export default methods;
