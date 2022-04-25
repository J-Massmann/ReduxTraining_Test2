import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const burgerRestaurantApi = createApi({
  reducerPath: 'burgerRestaurants',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openbrewerydb.org/breweries',
  }),
  endpoints: builder => ({
    getBurgerRestaurantsByNumberOfRestaurantsOnPage: builder.query({
      query: numberOfRestaurantsLoaded =>
        `?per_page=${numberOfRestaurantsLoaded}`,
    }),
  }),
});

export const { useGetBurgerRestaurantsByNumberOfRestaurantsOnPageQuery } =
  burgerRestaurantApi;
