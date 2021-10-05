import React from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { SocialIcon } from 'react-social-icons';
import { GrDocumentPdf } from 'react-icons/gr';
import { katex } from 'katex';


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
        "title": "Robotic Sorting on the Grid",
        "venue": "To Appear at ICDCN 2022 - 23rd International Conference on Distributed Computing and Networking",
        "authors": ["Jared Coleman", "Oscar Morales-Ponce",],
        // "social": {
        //     "pdf": ""
        // },
        "abstract": katex.render(
            `Inspired by robotic applications, we study the problem of sorting a set of items 
            over a physical domain with mobile agents. 
            Given $m$ mobile robots and a grid where each cell contains a single element, 
            the objective is to design algorithms that allow robots to cooperatively sort 
            the elements over the grid in the minimum time. 
            We assume a synchronous model where robots do not communicate, can carry up to 
            $c$ elements, and can move between adjacent cells in one unit of time (grab and 
            release time is negligible).
            First, we show that any algorithm requires at least 
            $\Omega\left(\frac{n^2}{mc}\right)$ units of time to sort an $n$-element line
            (an $n \times 1$ grid) and present an algorithm that sorts the elements in 
            $O\left(\frac{n^2}{mc}\right)$ time. 
            Then, we show that any $n \times n$-grid requires at least 
            $\Omega\left(\frac{n^3}{mc}\right)$ time and present an algorithm that 
            completes in $O\left(\frac{n^3 \log n}{mc}\right)$ time. 
            Our algorithms have an equivalent competitive ratio to Shear Sort 
            [Isaacd et al., Proc ICPP 1986] with only $m = n$ agents (compared to the $n^2$ 
            processors required by Shear Sort). 
            Finally, we present experimental results that show the capacity has very little 
            impact on the overall runtime and that a simplification of the algorithm leads 
            to better results.`
        )
    },
    {
        "title": "The Pony Express Communication Problem",
        "venue": "In Proceedings IWOCA 2021 - 32nd International Workshop on Combinatorial Algorithms",
        "authors": ["Jared Coleman", "Evangelos Kranakis", "Oscar Morales-Ponce", "Danny Krizanc"],
        "social": {
            "pdf": "https://arxiv.org/pdf/2105.03545"
        },
        "abstract": `We introduce a new problem which we call the Pony Express problem. n robots with differing speeds are situated over some domain. A message is placed at some commonly known point. Robots can acquire the message either by visiting its initial position, or by encountering another robot that has already acquired it. The robots must collaborate to deliver the message to a given destination. The objective is to deliver the message in minimum time. In this paper we study the Pony Express problem on the line where n robots are arbitrarily deployed along a finite segment. The robots have different speeds and can move in both directions. We are interested in both offline centralized and online distributed algorithms. In the online case, we assume the robots have limited knowledge of the initial configuration. In particular, the robots do not know the initial positions and speeds of the other robots nor even their own position and speed. They do, however, know the direction on the line in which to find the message and have the ability to compare speeds when they meet.
        
        First, we study the Pony Express problem where the message is initially placed at one endpoint of a segment and must be delivered to the other endpoint. We provide an O(n log n) running time offline algorithm as well as an optimal online algorithm. Then we study the Half-Broadcast problem where the message is at the center and must be delivered to either one of the endpoints of the segment [-1,1]. We provide an offline algorithm running in O(n^2 log n) time and we provide an online algorithm that attains a competitive ratio of 3/2 which we show is the best possible. Finally, we study the Broadcast problem where the message is at the center and must be delivered to both endpoints of the segment [-1,1]. Here we give an FPTAS in the offline case and an online algorithm that attains a competitive ratio of 9/5, which we show is tight.`
    },
    {
        "title": "Minimizing The Maximum Distance Traveled To Form Patterns With Systems of Mobile Robots",
        "venue": "In proceedings CCCG 2020, 32nd Canadian Conference on Computational Geometry, August 5-7, 2020",
        "authors": ["Jared Coleman", "Evangelos Kranakis", "Oscar Morales-Ponce", "Jorge Urrutia", "Birgit Vogtenhuber"],
        "social": {
            "pdf": "https://arxiv.org/pdf/2006.15664.pdf",
            "github": "https://github.com/jaredraycoleman/pafo",
            "youtube": "https://www.youtube.com/watch?v=Kq9y034tbiY"
        },
        "abstract": "In the pattern formation problem, robots in a system must self-coordinate to form a given pattern, regardless of translation, rotation, uniform-scaling, and/or reflection. In other words, a valid final configuration of the system is a formation that is similar to the desired pattern. While there has been no shortage of research in the pattern formation problem under a variety of assumptions, models, and contexts, we consider the additional constraint that the maximum distance traveled among all robots in the system is minimum. Existing work in pattern formation and closely related problems are typically application-specific or not concerned with optimality (but rather feasibility). We show the necessary conditions any optimal solution must satisfy and present a solution for systems of three robots. Our work also led to an interesting result that has applications beyond pattern formation. Namely, a metric for comparing two triangles where a distance of 0 indicates the triangles are similar, and 1 indicates they are fully dissimilar."
    }
]

const SOCIAL_STYLE = {height: 25, width: 25};
const SOCIAL_CLASS_NAME = "mr-2";
function getSocial(social, url) {
    if (social === "pdf") {
        return (
            <a key={`social-pdf`} href={url}>
                <GrDocumentPdf 
                    size="2em" 
                    className={SOCIAL_CLASS_NAME}
                />
            </a>
        );
    }
    return (
        <SocialIcon 
            key={`social-${social}`} 
            url={url} 
            className={SOCIAL_CLASS_NAME}
            style={SOCIAL_STYLE} 
        />
    );
}
function Publications () {
    const pubitems = pubs.map((pub, i) => {
        const authors = pub.authors.map(author => {
            return <a href={websites[author]} style={{color: "gray"}}>{author}</a>
        }).reduce((prev, curr) => [prev, <br/ >, curr]);
        console.log(Object.entries(pub.social || {}));
        const social = Object.entries(pub.social || {}).map(([social, url]) => {
            return getSocial(social, url);
        });
        const linksRow = (pub.social || []).length <= 0 ? null : (
            <Row>
                <Col>
                    <h5><b>Links</b></h5>
                    {social}
                </Col>
            </Row>
        );
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={`acc-${i}`} style={{cursor: 'pointer'}}>
                    {/* {pub.link ? <a href={pub.link} style={{color: "black"}}><b>{pub.title}</b></a> : <b>{pub.title}</b>} */}
                    <b>{pub.title}</b>
                    <br />
                    {pub.venue}
                    <br />
                    <em>{pub.authors.reduce((prev, curr) => [prev, ", ", curr])}</em>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`acc-${i}`}>
                    <Card.Body>
                        {/* <Row className="justify-content-center">
                            <Col className="text-center">
                                {social}
                            </Col>
                        </Row> */}
                        <Row className="mt-2">
                            <Col xs={12} sm={8} lg={10} className="mb-3">
                                <h5><b>Abstract</b></h5>
                                <span style={{ whiteSpace: 'pre-line' }}>{pub.abstract}</span>
                            </Col>
                            <Col>
                                {linksRow}
                                <Row className="mt-3">
                                    <Col>
                                        <h5><b>Authors</b></h5>
                                        {authors}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            // <ListGroup.Item key={pub.link}>
            //     <Row>
            //         <Col xs={12} sm={4} lg={2}>
            //             {social}
            //         </Col>
            //         <Col xs={12} sm={8} lg={10}>
            //             {pub.link ? <a href={pub.link} style={{color: "black"}}><b>{pub.title}</b></a> : <b>{pub.title}</b>}
            //             <br />
            //             {pub.venue}
            //             <br />
            //             {authors}
            //         </Col>
            //     </Row>
            // </ListGroup.Item>
        );
    });

    return (
        <Row>
            <Col>
                <h1 className="text-center">Publications</h1>
                <Accordion>
                    {pubitems}
                </Accordion>
            </Col>
        </Row>
    );
}

export default Publications;