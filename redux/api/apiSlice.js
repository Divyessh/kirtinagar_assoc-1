// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/* eslint-disable no-unused-vars */

export const apiSlice = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: `/api` }),
  tagTypes: ['Blog', 'PROVIDER'],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blog',
      providesTags: (result, error, arg) => [{ type: 'BLOG', id: 'LIST' }],
    }),
    getProviders: builder.query({
      query: () => '/provider',
      providesTags: (result, error, arg) => [{ type: 'PROVIDER', id: 'LIST' }],
    }),
    getProvidersById: builder.query({
      query: (id) => `/provider/${id}`,
      providesTags: (result, error, arg) => [{ type: 'PROVIDER', id: 'LIST' }],
    }),
    updateProviderById: builder.mutation({
      // eslint-disable-next-line no-underscore-dangle
      query: (data) => ({ url: `/provider/${data?._id}`, method: 'PUT', body: data }),
      invalidatesTags: (result, error, arg) => [{ type: 'PROVIDER', id: 'LIST' }],
    }),
  }),
});

export const { useGetBlogsQuery, useGetProvidersQuery, useGetProvidersByIdQuery, useUpdateProviderByIdMutation } = apiSlice;
