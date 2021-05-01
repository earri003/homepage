import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';

const websites = {
    "Jared Coleman": "https://jaredraycoleman.com",
    "Evangelos Kranakis": "http://people.scs.carleton.ca/~kranakis/",
    "Oscar Morales-Ponce": "http://web.csulb.edu/~omorales/",
    "Jorge Urrutia": "https://www.matem.unam.mx/~urrutia/",
    "Birgit Vogtenhuber": "http://www.ist.tugraz.at/staff/vogtenhuber/",
    "Danny Krizanc": "https://dkrizanc.web.wesleyan.edu/"
}

const pubs = [
    {
        "title": "Minimizing The Maximum Distance Traveled To Form Patterns With Systems of Mobile Robots",
        "venue": "In proceedings CCCG 2020, 32nd Canadian Conference on Computational Geometry, August 5-7, 2020",
        "authors": ["Jared Coleman", "Evangelos Kranakis", "Oscar Morales-Ponce", "Jorge Urrutia", "Birgit Vogtenhuber"],
        "link": "https://arxiv.org/pdf/2006.15664.pdf"
    },
    {
        "title": "The Pony Express Communication Problem",
        "venue": "To appear in IWOCA 2021 - 32nd International Workshop on Combinatorial Algorithms",
        "authors": ["Jared Coleman", "Evangelos Kranakis", "Oscar Morales-Ponce", "Danny Krizanc"],
        // "link": "https://arxiv.org/pdf/2006.15664.pdf"
    }
]

function Publications () {
    const pubitems = pubs.map(pub => {
        const authors = pub.authors.map(author => {
            return <a href={websites[author]} style={{color: "gray"}}>{author}</a>
        }).reduce((prev, curr) => [prev, ", ", curr]);
        return (
            <ListGroup.Item key={pub.link}>
                {pub.link ? <a href={pub.link} style={{color: "black"}}><b>{pub.title}</b></a> : <b>{pub.title}</b>}
                <br />
                {pub.venue}
                <br />
                {authors}
            </ListGroup.Item>
        );
    });

    return (
        <Row>
            <Col>
                <h1 className="text-center">Publications</h1>
                <ListGroup>
                    {pubitems}
                </ListGroup>
            </Col>
        </Row>
    );
}

export default Publications;