import { useState } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <h1 className="text-center">Welcome to Webpage</h1>
      </div>
      <section id="services" className="mt-5 bg-light py-5">
        <Container>
          <h2 className="text-center mt-1">Our Services</h2> <br /><br /><br /><br />
          <div className="row ">
            <div className="col-md-4">
              <h4>Service 1</h4>
              <p>Details about service 1.</p>
            </div>
            <div className="col-md-4">
              <h4>Service 2</h4>
              <p>Details about service 2.</p>
            </div>
            <div className="col-md-4">
              <h4>Service 3</h4>
              <p>Details about service 3.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="mt-5">
        <Container>
          <h2 className="text-center">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia risus ac lectus malesuada, a pharetra velit faucibus.
            Curabitur et mauris auctor, condimentum felis eget, suscipit arcu. Suspendisse potenti.
          </p>
        </Container>
      </section> <br /><br /><br />


      <footer className="footer">
        <Container>
          <p>&copy; 2024 React-Bootstrap App</p>
          <div className="d-flex justify-content-center align-items-center">
            <i className="bi bi-heart-fill text-danger mx-2"></i>
            <p>Built with love</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
