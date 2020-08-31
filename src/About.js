import React from 'react';
import {Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Row>
            <Col>
                <h1 className='text-center'>About Me</h1>
                <h2>Research</h2>
                <p>
                    I have a broad interest in computer science and mathematics. 
                    In particular, my research interests include computational geometry, discrete mathematics,graph theory, distributed computing, and mobile robotic networks.
                </p>
                <p>
                    My first exposure to research through a student outreach with <a href="https://aerospace.org">The Aerospace Corporation</a>. 
                    A small, interdisciplinary team and I built a distributed system of robots with strict hardware requirements and demonstrated its ability to perform cooperative tasks. 
                    The experience exposed me to a variety of topics including wireless networking, computer vision, distributed algorithms, and mobile robotics.
                </p>
                <p>
                    For the past couple of years, I have been working with <a href="http://web.csulb.edu/~omorales/">Dr. Oscar Morales Ponce</a> on a variety of distributed computing and discrete mathematics problems with applications in mobile robotics. 
                    Dr. Morales was also my advisor for my master’s thesis - a study on optimal pattern formation with systems of mobile robots. 
                </p>
                
                <h2>More About Me</h2>
                <p>
                    I am a proud member of the <a href="https://www.bigpinepaiute.org/">Big Pine Paiute Tribe of the Owens Valley</a>. 
                    Besides computer science, I enjoy politics, hiking, and generally learning new things (languages, etc.).
                </p>
                <p>
                    I am husband to <a href="https://tainacoleman.com">Tainã Coleman</a>, an amazing computer scientist, wife, and friend. I met Tainã in 2013 during my first semester as an undergraduate at <a href="https://csulb.edu">CSULB</a> while she was visiting as an international exchange student from Brazil. After her one-year program was up, I followed her back to her university, <a href="https://unifei.edu.br/">Universidade Federal de Itajubá</a> and studied there for three semesters. In 2016, we returned to the United States, got married, and decided to finally stay put in Long Beach.
                </p>
                <p>
                    Tainã and I are both now master’s students at CSULB and prospective Ph.D. students for Fall 2020. Though our research interests are different, having someone who shares my understands and encourages my passion for problem solving is amazing.
                </p>
                <p>
                    Read more about Tainã <a href="https://tainacoleman.com">on her page</a> (she’s pretty cool).
                </p>
            </Col>
        </Row>
    );
}

export default About;