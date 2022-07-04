export function fetchImages(county = 5) {
  return fetch(
    `https://dog.ceo/api/breeds/image/random/${county}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Nothing is there `));
  });
}
