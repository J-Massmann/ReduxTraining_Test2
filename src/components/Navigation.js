import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavWrapper>
      <button>
        <Link to={'/'}>Home</Link>
      </button>
      <button>
        <Link to={'/imageslideshow'}>Image Slide Show</Link>
      </button>
      <button>
        <Link to={'/aboutus'}>About us</Link>
      </button>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
