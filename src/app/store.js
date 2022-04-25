import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { burgerRestaurantApi } from '../services/burgerRestaurants.js';
import LoadMoreBurgerRestaurantsReducer from '../features/loadMoreBurgerRestaurantsSlice.js';

const store = configureStore({
  reducer: {
    [burgerRestaurantApi.reducerPath]: burgerRestaurantApi.reducer,
    loadMoreBurgerRestaurants: LoadMoreBurgerRestaurantsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(burgerRestaurantApi.middleware),
});

setupListeners(store.dispatch);

export default store;
