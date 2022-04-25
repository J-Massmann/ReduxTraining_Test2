import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ChangePictureButton from '../components/ChangePictureButton';
import Pictures from '../data/Pictures';

export default function ImageSlideShow() {
  const currentPicture = useSelector(state => state.changePicture.initialIndex);
  return (
    <main>
      <Header>Image Slide Show</Header>
      <ContentWrapper>
        <ChangePictureButton />
        <img
          alt={`${Pictures[currentPicture].name}`}
          src={`${Pictures[currentPicture].image}`}
          width={200}
          height={300}
        />
        <ChangePictureButton next="next" />
      </ContentWrapper>
    </main>
  );
}

const Header = styled.h1`
  text-align: center;
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
