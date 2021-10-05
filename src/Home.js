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
            <h1 className="text-center">Jared Coleman</h1>
            <p className="mt-3 text-center">
                I am a <b>Ph.D. student</b> at <a href="https://usc.edu">University of Southern California</a> advised by <a href="http://ceng.usc.edu/~bkrishna/">Bhaskar Krishnamachari</a>.
                I have <b>Master's and Bachelor's degrees</b> in <b>Computer Science</b> from <a href="https://csulb.edu">California State University, Long Beach</a>.
                I am a <b>Member of the Technical Staff</b> at the Federally Funded Research and Development Center, <a href="https://aerospace.org">Aerospace Corporation</a>.
            </p> 
    
            <h2 className="text-center">Research Interests</h2>
            <p className="text-center">
                I have a broad interest in computer science and mathematics. 
                In particular, my research interests include computational geometry, discrete mathematics, graph theory, distributed computing, blockchain, and <b>mobile robotic networks</b>.
            </p>
        </Col>
      </Row>
    );  
}

export default Home;