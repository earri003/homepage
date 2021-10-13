import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import profile from "./profile.png";

function Home() {
    return (
      <Row>
        <Col xs={12} md={4} className="mb-2">
            <Image src={profile} rounded width="100%" />
        </Col>
        <Col>
            <h1 className="text-center">Erik Arriaga</h1>
            <p className="mt-3 text-center">
                I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> advised by <a href="http://ceng.usc.edu/~bkrishna/">Bhaskar Krishnamachari</a>.
                I have Master's and Bachelor's degrees in <b>Computer Science</b> from <a href="https://csulb.edu">California State University, Long Beach</a>.
                I am also a Member of the Technical Staff at the Federally Funded Research and Development Center, <a href="https://aerospace.org">Aerospace Corporation</a>.
            </p> 
    
            <h2 className="text-center">Research Interests</h2>
            <p className="text-center">
                I have a broad interest in computer science and mathematics. 
                In particular, my research interests include blockchain, algorithms, mobile robotic networks, discrete mathematics, graph theory, and distributed computing.
            </p>
        </Col>
      </Row>
    );  
}

export default Home;