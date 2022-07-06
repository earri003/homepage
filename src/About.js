import React from 'react';
import {Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Row>
            <Col>
                <h1 className='text-center'>About Me</h1>
                <h2>My interest</h2>
                <p>
                    I have a broad interest in computer science
                    which include, computer vision, big data, databases, distributed computing, cloud computing, and data science.
                </p>
                {/* <p>
                    My first exposure to research was through a student outreach project with <a href="https://aerospace.org">The Aerospace Corporation</a>. 
                    A small, interdisciplinary team and I built a distributed system of robots with strict hardware requirements and demonstrated its ability to perform cooperative tasks. 
                    The experience exposed me to a variety of topics including wireless networking, computer vision, distributed algorithms, and mobile robotics.
                </p> */}
                <p>
                    I am casually looking for opportunities in computer science or data science. 
                </p>
                <p>
                    During my time at <a href="https://csulb.edu">CSULB</a>, I started learning and applying more computer vision techniques.
                    I enjoyed working with new technologies and expanding my knowledge in different machine learning architectures. 
                </p>
                <p>
                    In the near future I would like to go back to school and pursue a PH D. in Computer science. 
                    I know that will allow me to further my knowledge and become an expert on a specific field. 
                </p>
                <p>
                    I am a Software Developer for  <a href="https://www.gm.com/">General Motors</a>. There I work in Extract Load Transfer (ETL) Processes and 
                    also have done Data Analytics on large datasets.
                </p>
                
                <h2>More About Me</h2>
                <p>
                    I have been a soccer referee for about 13 years. I referee youth games, adult games, and college games.
                    Besides computer science, I enjoy watching and playing sports, hiking, and spending time with friends and family. 
                </p>
                <p>
                </p>
            </Col>
        </Row>
    );
}

export default About;