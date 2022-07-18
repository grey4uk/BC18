import axios from 'axios';

axios.defaults.baseURL = 'https://dog.ceo/api/breeds/image';

const getDogsImages = async (county = 1) => {
  return await axios(`/random/${county}`);
};

const methods = { getDogsImages };

export default methods;
