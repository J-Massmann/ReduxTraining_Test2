import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { toggleLikeButton } from '../features/toggleLikeButtonSlice';

export default function LikeButton({ burgerRestaurantId }) {
  const dispatch = useDispatch();
  const likeStatus = useSelector(
    state => state.toggleLike.statusListOfLikes[burgerRestaurantId]
  );
  const status = useSelector(state => state.toggleLike.statusListOfLikes);
  console.log(status);

  return (
    <StyledButton
      aria-label={`click to ${likeStatus ? 'unlike' : 'like'}`}
      onClick={() => dispatch(toggleLikeButton(burgerRestaurantId))}
    >
      <StyledLikeIcon
        icon="akar-icons:heart"
        color={`${likeStatus ? 'red' : 'black'}`}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledLikeIcon = styled(Icon)`
  height: 30px;
  width: 30px;
  &:active {
    transform: scale(0.9);
  }
`;
