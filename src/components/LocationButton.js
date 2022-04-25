import styled from 'styled-components';
import { Icon } from '@iconify/react';

export default function LocationButton({ handleOpen }) {
  return (
    <StyledButton aria-label="click to see the address" onClick={handleOpen}>
      <StyledLocationIcon icon="akar-icons:location" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledLocationIcon = styled(Icon)`
  height: 30px;
  width: 30px;
`;
