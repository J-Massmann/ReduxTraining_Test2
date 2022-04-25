import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeToNextPicture,
  changeToPreviousPicture,
} from '../features/changePictureSlice.js';
import Pictures from '../data/Pictures.js';

export default function ChangePictureButton({ next }) {
  const dispatch = useDispatch();
  const currentPicture = useSelector(state => state.changePicture.initialIndex);
  const pictureArrayLength = Pictures.length;
  return (
    <StyledButton
      onClick={() =>
        dispatch(
          (next ? changeToNextPicture : changeToPreviousPicture)(currentPicture)
        )
      }
      disabled={
        currentPicture ===
        (next
          ? pictureArrayLength - 1
          : pictureArrayLength - pictureArrayLength)
      }
    >
      <Arrow
        icon={next ? 'akar-icons:chevron-right' : 'akar-icons:chevron-left'}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const Arrow = styled(Icon)`
  height: 30px;
  width: 30px;
  &:active {
    transform: scale(0.9);
  }
`;
