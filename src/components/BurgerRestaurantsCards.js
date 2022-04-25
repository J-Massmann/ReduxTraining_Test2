import styled from 'styled-components';

export default function BurgerRestaurantsCards({ burgerRestaurantDetails }) {
  return (
    <>
      <SingleBurgerRestaurantWrapper>
        <h2>{burgerRestaurantDetails.name}</h2>
      </SingleBurgerRestaurantWrapper>
    </>
  );
}

const SingleBurgerRestaurantWrapper = styled.div`
  background-color: lightgray;
  border: 1px solid black;
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
`;
