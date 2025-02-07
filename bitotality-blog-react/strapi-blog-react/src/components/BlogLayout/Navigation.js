import React from 'react';
import styled from 'styled-components';

export function Navigation() {
  return (
    <Nav>
      <Logo>
        <LogoLetter color="#EFC93A">L</LogoLetter>
        <LogoLetter color="#06D5A1">o</LogoLetter>
        <LogoLetter color="#FC4066">g</LogoLetter>
        <LogoLetter color="#0EC8ED">o</LogoLetter>
      </Logo>
      <NavLinks>
        <NavLink>Characters</NavLink>
        <NavLink>Comics</NavLink>
        <NavLink>Games</NavLink>
        <NavLink>News</NavLink>
        <NavLink>Video</NavLink>
        <NavLink>Community</NavLink>
        <NavLink>More</NavLink>
      </NavLinks>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.div`
  font-family: 'Dragon Fruit Days', sans-serif;
  font-size: 30px;
  display: flex;
`;

const LogoLetter = styled.span`
  color: ${props => props.color};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 41px;
  
  @media (max-width: 991px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'Hey Comic', sans-serif;
  font-size: 18px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #FC4066;
  }
`;