import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import Publications from './Publications';
import Projects from './Projects';
import About from './About';
import profile from "./profile.png";

const SOCIAL_STYLE = {height: 35, width: 35};

function Home() {
  return (
    <Row>
      <Col xs={4}>
        <Image src={profile} rounded width="100%" />
      </Col>
      <Col>
        <h1 className="text-center">Jared Coleman</h1>
        <p className="mt-3 text-center">I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> under advisor <a href="http://ceng.usc.edu/~bkrishna/">Bhaskar Krishnamachari</a>.
        I have <b>Master's and Bachelor's degrees</b> in <b>Computer Science</b> from California State University, Long Beach.
        I am a <b>Member of the Technical Staff</b> at the Federally Funded Research and Development.</p> 

        <h2 className="text-center">Research Interests</h2>
        <p className="text-center">
          I have a broad interest in computer science and mathematics. 
          In particular, my research interests include <b>computational geometry</b>, discrete mathematics, graph theory, distributed computing, and <b>mobile robotic networks</b>.
        </p>
      </Col>
    </Row>
  );  
}

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className="mb-2">
        <Navbar.Brand href="/">Jared Coleman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      
      <Navbar bg="light" fixed="bottom" style={{opacity: 1, backgroundColor: "white"}}>
        <Nav key='nav-contact' className='mr-auto'>
          <Nav.Link href="mailto:jaredcol@usc.edu">Contact</Nav.Link>
          <Nav.Link href="/resume.pdf">CV</Nav.Link>
        </Nav>
        <Nav>
          <SocialIcon key='social-facebook' url="https://facebook.com/jaredraycoleman" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-instagram' url="https://instagram.com/jared_coleman" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-twitter' url="https://twitter.com/jaredraycoleman" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-linkedin' url="https://www.linkedin.com/in/jaredraycoleman/" className="m-1" style={SOCIAL_STYLE} />
          <SocialIcon key='social-github' url="https://www.github.com/jaredraycoleman/" className="m-1" style={SOCIAL_STYLE} />
        </Nav>
      </Navbar>
    </Router>
  );
}

export default App;
