import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';

import { xml2js } from 'xml-js';
import axios from 'axios';

class Publications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pubs: []
        };
    }

    componentDidMount() {
        axios.get("https://dblp.org/pid/268/5846.xml").then(res => {
            let xml = xml2js(res.data, { compact: true });
            let pubs = xml.dblpperson.r.article ? [xml.dblpperson.r.article] : xml.dblpperson.r;
            this.setState({ pubs });
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        const { pubs } = this.state;
        const pubitems = pubs.map(pub => {
            console.log(pub);
            const authors = pub.author.map(author => {
                return <a href={`https://dblp.org/pid/${author._attributes.pid}`} style={{color: "gray"}}>{author._text}</a>
            }).reduce((prev, curr) => [prev, ", ", curr]);
            return (
                <ListGroup.Item>
                    <a href={pub.ee._text} style={{color: "black"}}><b>{pub.title._text}</b></a>
                    <br />
                    {authors}
                </ListGroup.Item>
            );
        });

        return (
            <Row>
                <Col>
                    <h2 className="text-center">Publications</h2>
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