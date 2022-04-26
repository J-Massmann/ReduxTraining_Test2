import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const burgerRestaurantApi = createApi({
  reducerPath: 'burgerRestaurants',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openbrewerydb.org/breweries',
  }),
  endpoints: builder => ({
    getBurgerRestaurantsByNumberOfRestaurantsOnPage: builder.query({
      query: () => '?per_page=50',
    }),
  }),
});

export const { useGetBurgerRestaurantsByNumberOfRestaurantsOnPageQuery } =
  burgerRestaurantApi;
