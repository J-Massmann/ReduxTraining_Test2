import styled from 'styled-components';

export default function LocationModal({
  showModal,
  locationDetails,
  handleClose,
}) {
  if (!showModal) return null;
  return (
    <LocationWrapper>
      <span>{locationDetails.street}</span>
      <div>
        <span>{locationDetails.postal_code}</span>
        <span>{locationDetails.city}</span>
      </div>
      <span>{locationDetails.state}</span>
      <span>{locationDetails.country}</span>
      <button onClick={handleClose}>close</button>
    </LocationWrapper>
  );
}

const LocationWrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  background-color: lightblue;
  border: 1px solid black;
  padding: 1.5rem;
  z-index: 2;
`;
