import React from 'react';




const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 16px;
  color: #6B46C1; /* text-purple-500 */
`;

const Title = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  background-color: #ED64A6; /* bg-pink-500 */
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  padding: 16px; /* p-4 */
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Home() {
  return (
    <Navbar>
      <Title>
        Welcome to Verdant Elegance!
      </Title>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <div>
        {/* <AiOutlineClose size={20}/> */}
      </div>
    </Navbar>
  );
}

export default Home;