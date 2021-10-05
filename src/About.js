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
                    In particular, my research interests include computational geometry, discrete mathematics, graph theory, distributed computing, blockchain, and mobile robotic networks.
                </p>
                {/* <p>
                    My first exposure to research was through a student outreach project with <a href="https://aerospace.org">The Aerospace Corporation</a>. 
                    A small, interdisciplinary team and I built a distributed system of robots with strict hardware requirements and demonstrated its ability to perform cooperative tasks. 
                    The experience exposed me to a variety of topics including wireless networking, computer vision, distributed algorithms, and mobile robotics.
                </p> */}
                <p>
                    I am currently a student at <a href="https://www.usc.edu/">USC</a> working in the <a href="https://anrg.usc.edu/www/">Autonomous Networks Research Group</a> on blockchain and IoT problems
                    and am grateful to be advised by <a href="https://ceng.usc.edu/~bkrishna/">Dr. Bhaskar Krishnamachari</a>.
                </p>
                <p>
                    During my time at <a href="https://csulb.edu">CSULB</a>, I started working (and to continue to work) with my MS advisor <a href="http://web.csulb.edu/~omorales/">Dr. Oscar Morales Ponce</a> on a variety of distributed computing and discrete mathematics problems with applications in mobile robotics (see my <a href="/publications">publications</a>).
                </p>
                <p>
                    I am also a Member of the Technical Staff at <a href="https://aerospace.org">The Aerospace Corporation</a>, where I have the privilege to develop tools for flight software verification and day-of-launch launch vehicle analysis!
                </p>
                
                <h2>More About Me</h2>
                <p>
                    I am a proud member of the <a href="https://www.bigpinepaiute.org/">Big Pine Paiute Tribe of the Owens Valley</a>. 
                    Besides computer science, I enjoy board games, hiking, history, and language.
                </p>
                <p>
                    I am husband to <a href="https://tainacoleman.com">Tainã Coleman</a>, an amazing computer scientist, wife, and friend. I met Tainã in 2013 during my first semester as an undergraduate at CSULB while she was visiting as an international exchange student from Brazil. After her one-year program was up, I followed her back to her university, <a href="https://unifei.edu.br/">Universidade Federal de Itajubá</a> and studied there for three semesters. In 2016, we returned to the United States and got married! Tainã and I are both now Ph.D. students at USC. 
                </p>
            </Col>
        </Row>
    );
}

export default About;