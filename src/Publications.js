import React from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { SocialIcon } from 'react-social-icons';
import { GrDocumentPdf } from 'react-icons/gr';
import MathJax from 'react-mathjax';


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
        "authors": ["Jared Coleman", "Oscar Morales-Ponce"],
        // "social": {
        //     "pdf": ""
        // },
        "abstract": (
            <div>
                Inspired by robotic applications, we study the problem of sorting a set of items over a physical domain with mobile agents. Given <MathJax.Node inline formula={`m`} /> mobile robots and a grid where each cell contains a single element, the objective is to design algorithms that allow robots to cooperatively sort the elements over the grid in the minimum time. We assume a synchronous model where robots do not communicate, can carry up to <MathJax.Node inline formula={`c`} /> elements, and can move between adjacent cells in one unit of time (grab and release time is negligible). First, we show that any algorithm requires at least <MathJax.Node inline formula={`\\Omega\\left(\\frac{n^2}{mc}\\right)`} />units of time to sort an <MathJax.Node inline formula={`n`} />-element line (an <MathJax.Node inline formula={`n \\times 1`} />) and present an algorithm that sorts the elements in <MathJax.Node inline  formula={`O \\left(\\frac{n^2}{mc}\\right)`} /> time. Then, we show that any <MathJax.Node inline formula={`n \\times 1`} />-grid requires at least <MathJax.Node inline formula={`\\Omega \\left( \\frac{n^3}{mc} \\right)`} /> time and present an algorithm that completes in <MathJax.Node inline formula={`O\\left(\\frac{n^3 \\log n}{mc}\\right)`} /> time. Our algorithms have an equivalent competitive ratio to Shear Sort [Isaacd et al., Proc ICPP 1986] with only <MathJax.Node inline formula={`m=n`} /> agents (compared to the <MathJax.Node inline formula={`n^2`} /> processors required by Shear Sort). Finally, we present experimental results that show the capacity has very little impact on the overall runtime and that a simplification of the algorithm leads to better results.
            </div>
        )
    },  
    {
        "title": "Message Delivery in the Plane by Robots with Different Speeds",
        "venue": "To Appear at SSS 2021 - 23rd International Symposium on Stabilization, Safety, and Security of Distributed Systems",
        "authors": ["Jared Coleman", "Evangelos Kranakis", "Oscar Morales-Ponce", "Danny Krizanc"],
        "social": {
            "pdf": "https://arxiv.org/pdf/2109.12185"
        },
        "abstract": (
            <div>
                <p>
                    We study a fundamental cooperative message-delivery problem on the plane. Assume <MathJax.Node inline formula={`n`} /> robots which can move in any direction, are placed arbitrarily on the plane. Robots each have their own maximum speed and can communicate with each other face-to-face (i.e., when they are at the same location at the same time). There are also two designated points on the plane, <MathJax.Node inline formula={`S`} /> (the <i>source</i>) and <MathJax.Node inline formula={`D`} /> (the <i>destination</i>). The robots are required to transmit the message from the source to the destination as quickly as possible by face-to-face message passing. We consider both the offline setting where all information (the locations and maximum speeds of the robots) are known in advance and the online setting where each robot knows only its own position and speed along with the positions of <MathJax.Node inline formula={`S`} /> and <MathJax.Node inline formula={`D`} />.
                </p>

                <p>
                    In the offline case, we discover an important connection between the problem for two-robot systems and the well-known Apollonius circle which we employ to design an optimal algorithm. We also propose a <MathJax.Node inline formula={`\\sqrt 2`} /> approximation algorithm for systems with any number of robots. In the online setting, we provide an algorithm with competitive ratio <MathJax.Node inline formula={`\\frac 17 \\left( 5+ 4 \\sqrt{2} \\right)`} /> for two-robot systems and show that the same algorithm has a competitive ratio less than <MathJax.Node inline formula={`2`} /> for systems with any number of robots. We also show these results are tight for the given algorithm. Finally, we give two lower bounds (employing different arguments) on the competitive ratio of any online algorithm, one of <MathJax.Node inline formula={`1.0391`} /> and the other of <MathJax.Node inline formula={`1.0405`} />.
                </p>
            </div>
        )
    },
    {
        "title": "The Pony Express Communication Problem",
        "venue": "In Proceedings IWOCA 2021 - 32nd International Workshop on Combinatorial Algorithms",
        "authors": ["Jared Coleman", "Evangelos Kranakis", "Oscar Morales-Ponce", "Danny Krizanc"],
        "social": {
            "pdf": "https://arxiv.org/pdf/2105.03545"
        },
        "abstract": (
            <div>
                <p>
                    We introduce a new problem which we call the Pony Express problem. n robots with differing speeds are situated over some domain. A message is placed at some commonly known point. Robots can acquire the message either by visiting its initial position, or by encountering another robot that has already acquired it. The robots must collaborate to deliver the message to a given destination. The objective is to deliver the message in minimum time. In this paper we study the Pony Express problem on the line where n robots are arbitrarily deployed along a finite segment. The robots have different speeds and can move in both directions. We are interested in both offline centralized and online distributed algorithms. In the online case, we assume the robots have limited knowledge of the initial configuration. In particular, the robots do not know the initial positions and speeds of the other robots nor even their own position and speed. They do, however, know the direction on the line in which to find the message and have the ability to compare speeds when they meet.
                </p>
                <p>    
                    First, we study the Pony Express problem where the message is initially placed at one endpoint of a segment and must be delivered to the other endpoint. We provide an O(n log n) running time offline algorithm as well as an optimal online algorithm. Then we study the Half-Broadcast problem where the message is at the center and must be delivered to either one of the endpoints of the segment <MathJax.Node inline formula={"[-1,1]"} />. We provide an offline algorithm running in <MathJax.Node inline formula={`O(n^2 \\log n)`} /> time and we provide an online algorithm that attains a competitive ratio of <MathJax.Node inline formula={`\\frac 3 2`} /> which we show is the best possible. Finally, we study the Broadcast problem where the message is at the center and must be delivered to both endpoints of the segment <MathJax.Node inline formula={"[-1,1]"} />. Here we give an FPTAS in the offline case and an online algorithm that attains a competitive ratio of <MathJax.Node inline formula={`\\frac 9 5`} />, which we show is tight.
                </p>

            </div>
        )
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
        "abstract": (
            <div>
                <p>
                    In the pattern formation problem, robots in a system must self-coordinate to form a given pattern, regardless of translation, rotation, uniform-scaling, and/or reflection. In other words, a valid final configuration of the system is a formation that is similar to the desired pattern. While there has been no shortage of research in the pattern formation problem under a variety of assumptions, models, and contexts, we consider the additional constraint that the maximum distance traveled among all robots in the system is minimum. Existing work in pattern formation and closely related problems are typically application-specific or not concerned with optimality (but rather feasibility). We show the necessary conditions any optimal solution must satisfy and present a solution for systems of three robots. Our work also led to an interesting result that has applications beyond pattern formation. Namely, a metric for comparing two triangles where a distance of <MathJax.Node inline formula={`0`} /> indicates the triangles are similar, and <MathJax.Node inline formula={`1`} /> indicates they are fully dissimilar.
                </p>
            </div>
        )
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
                                <MathJax.Provider>{pub.abstract}</MathJax.Provider>
                                {/* <span style={{ whiteSpace: 'pre-line' }}>{pub.abstract}</span> */}
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