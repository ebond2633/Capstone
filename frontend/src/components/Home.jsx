import React from 'react';

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