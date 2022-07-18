import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dog.ceo/api/breeds/image',
  }),
  endpoints: (builder) => ({
    getDogsImages: builder.query({
      query: (perPage) => ({
        url: `/random/${perPage}`,
        method: 'GET',
      }),
      // perPage ? `/random/${perPage}` : '',
      transformResponse: (data) => {
        return data.message;
      },
    }),
  }),
});

export const {
  useGetDogsImagesQuery,
  useLazyGetDogsImagesQuery,
} = galleryApi;
