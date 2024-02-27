import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiFacebook, BiTwitter, BiPinterest, BiInstagram, BiHouseFill, BiSearch, BiPersonFill, BiCart2 } from 'react-icons/bi';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><BiFacebook/></Nav.Link>
        <Nav.Link><BiTwitter/></Nav.Link>
        <Nav.Link><BiPinterest/></Nav.Link>
        <Nav.Link><BiInstagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><BiHouseFill/> </Nav.Link>
        <Nav.Link><BiSearch/> </Nav.Link>
        <Nav.Link><BiPersonFill/> </Nav.Link>
        <NavDropdown title={<BiCart2/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <div className="row">
    <div className="col">
      <img src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" className="img-fluid rounded mx-auto d-block py-1" />
    </div>
  </div>
);

const MiddleMenu = () => (
  <div>
    <div className="row justify-content-center pt-4">
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>MEN</strong></div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>WOMEN</strong></div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>KIDS</strong></div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>BRANDS</strong></div>
        </div>
      </div>
      <div className="col-1">
        <strong>SEARCH</strong>
      </div>
    </div>

    <div className="row justify-content-center">
      <img src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" className="img-fluid pt-3" alt="Background" />
    </div>
  </div>
);

const FooterMenu = () => (
  <footer>
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          NAVIGATION
          <hr />
          <div>About us</div>
          <div>Employment</div>
          <div>Videos</div>
        </div>
        <div className="col">
          MAIN MENU
          <hr />
          <div>Menu</div>
          <div>Women</div>
          <div>Kids</div>
        </div>
        <div className="col">
          CONNECT
          <hr />
          <div>Sign up for the latest updates</div>
          <label>
            <input type="text" placeholder="Enter Email Address"/>
          </label>
          <div className="btn btn-dark">Join</div>
        </div>
      </div>
    </div>
  </footer>
);

const IslandSnow = () => (
  <Container>
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FooterMenu />
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
