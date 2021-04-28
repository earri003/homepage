import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';

function Publications () {
    return (
        <Row>
            <Col>
                <h1 className="text-center">Publications</h1>
                <ListGroup>
                    <ListGroup.Item key={pub.ee._text}>
                        <a href={pub.ee._text} style={{color: "black"}}><b>Minimizing The Maximum Distance Traveled To Form Patterns With Systems of Mobile Robots</b></a>
                        <br />
                        In proceedings CCCG 2020, 32nd Canadian Conference on Computational Geometry, August 5-7, 2020
                        <br />
                        J. Coleman, E. Kranakis, O. Morales-Ponce, J. Opatrny, J. Urrutia, B. Vogtenhuber
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
}

export default Publications;