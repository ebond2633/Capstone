// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('your-background-image.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  height: 60px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 14px 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <Link href="#contact">Contact</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;