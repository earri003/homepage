import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';

import { xml2js } from 'xml-js';
import axios from 'axios';

const DBLP_USER = "https://dblp.org/pid/268/5846.xml";

class Publications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pubs: []
        };
    }

    componentDidMount() {
        axios.get(DBLP_USER).then(res => {
            const xml = xml2js(res.data, { compact: true });

            let pubs = [];
            if (xml.dblpperson.r.article) pubs.push(xml.dblpperson.r.article);
            if (xml.dblpperson.r.inproceedings) pubs.push(xml.dblpperson.r.inproceedings);
            (Array.isArray(xml.dblpperson.r) ? xml.dblpperson.r : []).forEach(pub => {
                if (pub.article) pubs.push(pub.article);
                if (pub.inproceedings) pubs.push(pub.inproceedings);
            })
            
            this.setState({ pubs });
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        const { pubs } = this.state;
        const pubitems = pubs.map(pub => {
            const authors = (Array.isArray(pub.author) ? pub.author : [pub.author]).map(author => {
                return <a href={`https://dblp.org/pid/${author._attributes.pid}`} style={{color: "gray"}}>{author._text}</a>
            }).reduce((prev, curr) => [prev, ", ", curr]);
            const publisher = pub.journal ? pub.journal._text : (pub.booktitle ? pub.booktitle._text : null);
            return (
                <ListGroup.Item key={pub.ee._text}>
                    <a href={pub.ee._text} style={{color: "black"}}><b>{pub.title._text}</b></a>
                    <br />
                    {publisher}
                    {publisher ? <br /> : null}
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
}

// function Publications() {
//     res = scholarly.user("chcRCpcAAAAJ").then()
//     return (
//         <Row>
//             <Col>
//                 <h1 className='text-center'>Publications</h1>
                
                
                
//             </Col>
//         </Row>
//     );
// }

export default Publications;