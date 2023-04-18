import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default ColorSchemesExample;
// import React from 'react'
// import './Navbar.css'
// function Navbar() {
//   return (
//     <div>
//       <nav>
//         <article id="navbar">
//             <div><i class="fa-brands fa-apple"></i></div>
//             <div>Mac</div>
//             <div>iPad</div>
//             <div>iPhone</div>
//             <div>Watch</div>
//             <div>AirPods</div>
//             <div>TV & Home</div>
//             <div>Accessories</div>
//             <div>Only Apple</div>
//             <div>Support</div>
//             <div><i class="fa-solid fa-magnifying-glass"></i></div>
//             <div><i class="fa-solid fa-bag-shopping"></i></div>
//         </article>
//       </nav>
//     </div>
//   )
// }

// export default Navbar