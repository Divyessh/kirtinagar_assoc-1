// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/* eslint-disable no-unused-vars */

export const apiSlice = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DOMAIN}/api` }),
  tagTypes: ['Blog'],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blog',
      providesTags: (result, error, arg) => [{ type: 'BLOG', id: 'LIST' }],
    }),
  }),
});

export const { useGetBlogsQuery } = apiSlice;
