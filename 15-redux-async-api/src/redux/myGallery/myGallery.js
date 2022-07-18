import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const savedGalleryApi = createApi({
  reducerPath: 'savedGalleryApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://62d51e495112e98e4858e224.mockapi.io/api',
  }),
  tagTypes: ['images'],
  endpoints: (builder) => ({
    getMyImages: builder.query({
      query: () => ({
        url: `/images`,
        method: 'GET',
      }),
      // perPage ? `/random/${perPage}` : '',
      transformResponse: (data) => {
        // return data.map((el) => el.image);
        return data;
      },
      providesTags: ['images'],
    }),
    addMyImage: builder.mutation({
      query: (imageUrl) => ({
        url: '/images',
        method: 'POST',
        body: { image: imageUrl },
      }),
      invalidatesTags: ['images'],
    }),
    deleteMyImage: builder.mutation({
      query: (id) => ({
        url: `/images/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['images'],
    }),
  }),
});

export const {
  useGetMyImagesQuery,
  useAddMyImageMutation,
  useDeleteMyImageMutation,
} = savedGalleryApi;
