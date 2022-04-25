import styled from 'styled-components';
import BurgerRestaurantMenu from './BurgerRestaurantMenu';
import BurgerRestaurantRatingStars from './BurgerRestaurantRatingStars';
import LikeButton from './LikeButton';

export default function BurgerRestaurantsCards({ burgerRestaurantDetails }) {
  console.log(burgerRestaurantDetails);
  return (
    <>
      <SingleBurgerRestaurantWrapper>
        <SectionWrapper>
          <h2>{burgerRestaurantDetails.name}</h2>
          <LikeButton burgerRestaurantId={burgerRestaurantDetails.id} />
        </SectionWrapper>
        <BurgerRestaurantRatingStars BurgerRestaurantRating={2.7} />
        <SectionWrapper>
          <BurgerRestaurantMenu burgers={burgerRestaurantDetails} />
        </SectionWrapper>
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

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
