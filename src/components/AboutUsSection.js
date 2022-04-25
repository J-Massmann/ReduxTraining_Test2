import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleHidden } from '../features/toggleAboutUsSectionTextSlice';

export default function AboutUsSection({ SectionDetails }) {
  const dispatch = useDispatch();
  const currentHiddenStatus = useSelector(
    state => state.toggleIsTextHidden.isTextHidden[SectionDetails.id]
  );
  console.log(currentHiddenStatus);
  return (
    <section>
      <StyledButton
        aria-label="Click to see details"
        onClick={() => dispatch(toggleHidden(SectionDetails.id))}
      >
        <h2>{SectionDetails.title}</h2>
        <UnderlineText>Click to see more</UnderlineText>
      </StyledButton>
      <p hidden={!currentHiddenStatus}>{SectionDetails.text}</p>
    </section>
  );
}

const StyledButton = styled.button`
  border: none;
  background: none;
`;

const UnderlineText = styled.p`
  padding: 0;
  margin-top: -10px;
  color: grey;
`;
