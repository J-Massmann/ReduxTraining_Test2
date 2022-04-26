import styled from 'styled-components';
import { Icon } from '@iconify/react';

export default function BurgerRestaurantMenu({ burgers }) {
  return (
    <MenuWrapper>
      <p>Hamburger</p>
      <Icon
        icon={
          burgers.brewery_type === 'micro'
            ? 'akar-icons:check-box'
            : 'akar-icons:circle-x'
        }
      ></Icon>
      <p>Cheeseburger</p>
      <Icon
        icon={
          burgers.brewery_type === 'planning'
            ? 'akar-icons:check-box'
            : 'akar-icons:circle-x'
        }
      ></Icon>
      <p>Veggieburger</p>
      <Icon
        icon={
          burgers.brewery_type === 'pub-brew'
            ? 'akar-icons:check-box'
            : 'akar-icons:circle-x'
        }
      ></Icon>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
