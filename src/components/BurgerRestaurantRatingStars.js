import styled from 'styled-components';

export default function BurgerRestaurantRatingStars({
  BurgerRestaurantRating,
}) {
  return (
    <Stars
      aria-label={`Rating of this Restaurant is ${BurgerRestaurantRating}`}
      style={{ '--rating': BurgerRestaurantRating }}
    />
  );
}

const Stars = styled.div`
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: 1.5rem;
  font-family: Times;
  line-height: 1;
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      gold var(--percent),
      white var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
