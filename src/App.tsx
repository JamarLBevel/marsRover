import React from 'react';
import './App.css';
import { BrowserRouter,Router,Routes } from 'react-router-dom';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
 <Navbar bg='dark' expand='lg' variant='dark'>
  <Container>
    <Navbar.Brand href='#home'>Jamar Bevel Mars Rover</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='me-auto'>
       <Nav.Item>
       <Nav.Link href='/camera'>camera</Nav.Link>
       </Nav.Item>
       <Nav.Item>
       <Nav.Link href='/contact'>contact</Nav.Link>
       </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
 </Navbar>

 <Outlet/>
 </div>
  );
}

export default App;
