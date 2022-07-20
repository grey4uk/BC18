import { useState, useEffect } from 'react';

import { constants } from 'helpers/constants';

const useLocalStorage = () => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem(constants.ROOT)) ?? null
  );

  //   console.log('storage>>>>------', storage);

  useEffect(() => {
    const storageContent = JSON.parse(
      localStorage.getItem(constants.ROOT)
    );

    localStorage.setItem(
      constants.ROOT,
      JSON.stringify({
        ...(storageContent ? storageContent : {}),
        ...(storage ? storage : {}),
      })
    );
  }, [storage]);

  //   const setLocal = (a) => setStorage(a);

  //   return { storage, setLocal };
  return [storage, setStorage];
};

export default useLocalStorage;
