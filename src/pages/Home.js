import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useGetBurgerRestaurantsByNumberOfRestaurantsOnPageQuery } from '../services/burgerRestaurants.js';

export default function Home() {
  const currentNumberOfBurgerRestaurantsLoaded = useSelector(
    state => state.numberOfBurgerRestaurantsLoaded.value
  );
  const { data, error, isLoading, isSuccess, isError } =
    useGetBurgerRestaurantsByNumberOfRestaurantsOnPageQuery(
      currentNumberOfBurgerRestaurantsLoaded
    );
  return (
    <main>
      <h1>List of burger restaurants</h1>
    </main>
  );
}
