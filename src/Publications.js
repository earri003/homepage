import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';

function Publications () {
    return (
        <Row>
            <Col>
                <h1 className="text-center">Publications</h1>
                <ListGroup>
                    <ListGroup.Item key="robot-pattern-formation">
                        <a href="https://arxiv.org/pdf/2006.15664" style={{color: "black"}}><b>Minimizing The Maximum Distance Traveled To Form Patterns With Systems of Mobile Robots</b></a>
                        <br />
                        In proceedings CCCG 2020, 32nd Canadian Conference on Computational Geometry, August 5-7, 2020
                        <br />
                        <a href="https://jaredraycoleman.com">J. Coleman</a>
                        <a href="http://people.scs.carleton.ca/~kranakis/">E. Kranakis</a>
                        <a href="http://web.csulb.edu/~omorales/">O. Morales-Ponce</a>
                        <a href="https://www.matem.unam.mx/~urrutia/">J. Urrutia</a>
                        <a href="http://www.ist.tugraz.at/staff/vogtenhuber/">B. Vogtenhuber</a>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
}

export default Publications;