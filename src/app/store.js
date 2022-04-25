import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { burgerRestaurantApi } from '../services/burgerRestaurants.js';
import LoadMoreBurgerRestaurantsReducer from '../features/loadMoreBurgerRestaurantsSlice.js';
import ToggleLikeButtonReducer from '../features/toggleLikeButtonSlice.js';
import ChangePictureReducer from '../features/changePictureSlice.js';

const store = configureStore({
  reducer: {
    [burgerRestaurantApi.reducerPath]: burgerRestaurantApi.reducer,
    loadMoreBurgerRestaurants: LoadMoreBurgerRestaurantsReducer,
    toggleLike: ToggleLikeButtonReducer,
    changePicture: ChangePictureReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(burgerRestaurantApi.middleware),
});

setupListeners(store.dispatch);

export default store;
