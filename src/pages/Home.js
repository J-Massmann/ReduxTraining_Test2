import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useGetBurgerRestaurantsByNumberOfRestaurantsOnPageQuery } from '../services/burgerRestaurants.js';
import LoadMoreBurgerRestaurantsButton from '../components/LoadMoreBurgerRestaurantsButton.js';
import BurgerRestaurantsCards from '../components/BurgerRestaurantsCards.js';

export default function Home() {
  const currentNumberOfBurgerRestaurantsLoaded = useSelector(
    state => state.loadMoreBurgerRestaurants.value
  );
  const { data, error, isLoading, isSuccess, isError } =
    useGetBurgerRestaurantsByNumberOfRestaurantsOnPageQuery();
  const listOfBurgerRestaurantDisplayed = data.slice(
    0,
    currentNumberOfBurgerRestaurantsLoaded
  );
  return (
    <main>
      <h1>List of burger restaurants</h1>
      <StyledList>
        {isLoading && 'Loading...'}
        {isError && error.message}
        {isSuccess &&
          data &&
          listOfBurgerRestaurantDisplayed.map(burgerRestaurant => {
            return (
              <StyledListItem key={burgerRestaurant.id}>
                <BurgerRestaurantsCards
                  burgerRestaurantDetails={burgerRestaurant}
                />
              </StyledListItem>
            );
          })}
      </StyledList>
      <LoadMoreBurgerRestaurantsButton />
    </main>
  );
}

const StyledList = styled.ul`
  padding: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  margin: 0;
`;
