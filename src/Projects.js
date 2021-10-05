import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const SOCIAL_STYLE = {height: 25, width: 25};

const projects = [
    {
        name: 'Tendermint Tutorial Demo',
        links: {
            'youtube': 'https://www.youtube.com/watch?v=pVMFMiZGunw',
            'linkedin': 'https://www.linkedin.com/feed/update/urn:li:activity:6843577753867055104/',
            'github': 'https://github.com/ANRGUSC/tendermint_demo',
        },
        description: (
            <p>
                This is a short introductory tutorial on Tendermint consisting of a two-part video series and code to get started. Part 1 is a brief introduction to blockchain, Tendermint consensus, and the ABCI (Application Blockchain Interface). Part 2 is a tutorial demo which viewers can run themselves and follow along. No installation required - just click the "Open with GitPod" in the <a href="https://github.com/ANRGUSC/tendermint_demo">GitHub Repo</a>!
            </p>
        )
    },
    {
        name: 'Kubishi',
        links: {
            'facebook': 'https://facebook.com/kubishi',
            'instagram': 'https://instagram.com/ovkubishi',
            'twitter': 'https://twitter.com/ovkubishi',
            'github': 'https://github.com/kubishi/kubishi',
        },
        description: (
            <p>
                <a href="https://kubishi.com">Kubishi</a> is an online dictionary and encyclopedia for Owens Valley Paiute language and culture.
                The Owens Valley Paiute language is <a href='http://www.endangeredlanguages.com/lang/4692'>critically endangered</a>.
                Kubishi is one resource in the <a href='http://www.ovcdc.com/blog/language/'>fight</a> (led by Tribes of the Owens Valley) to reverse the damage inflicted by generations of forced assimilation and colonialism.
                The goal of this project is to help promote and preserve Owens Valley Paiute language and culture, but also to provide an open-source toolset for other tribal nations to do the same.
            </p>
        )
    }
]

function Projects() {

    const panel = projects.map(project => {
        const links = Object.entries(project.links).map(([social, url], i) => {
            return (
                <SocialIcon 
                    key={`social-${social}`} 
                    url={url} 
                    className={`${i > 0 ? 'ml-1' : ''} ${i < Object.keys(project.links).length ? 'mr-1' : ''}`}
                    style={SOCIAL_STYLE}
                />
            );
        });
        
        return (
            <ListGroup.Item key={project.name}>
                <Row className='mt-4 mb-3'>
                    <Col xs={12} sm={4} lg={2} className='text-center'>
                        <h3>{project.name}</h3>
                        {links}
                    </Col>
                    <Col xs={12} sm={8} lg={10}>
                        {project.description}
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    });

    return (
        <Row>
            <Col>
                <h1 className='text-center'>Projects</h1>
                {panel}
            </Col>
        </Row>
    );

    return (
        <Row>
            <Col>
                <h1 className='text-center'>Projects</h1>

                <Row className='mt-4'>
                    <Col xs={12} sm={4} lg={2} className='text-center'>
                    {/* <Col> */}
                        <h3>Tendermint Tutorial Demo</h3>
                        <SocialIcon key='social-youtube' url="https://www.youtube.com/watch?v=pVMFMiZGunw" className="mr-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-linkedin' url="https://www.linkedin.com/feed/update/urn:li:activity:6843577753867055104/" className="m-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-github' url="https://github.com/ANRGUSC/tendermint_demo" className="m-1" style={SOCIAL_STYLE} />
                    </Col>
                {/* </Row>
                <Row>   */}
                    <Col xs={12} sm={8} lg={10}>
                    {/* <Col> */}
                        <p>
                            This is a short introductory tutorial on Tendermint consisting of a two-part video series and code to get started. Part 1 is a brief introduction to blockchain, Tendermint consensus, and the ABCI (Application Blockchain Interface). Part 2 is a tutorial demo which viewers can run themselves and follow along. No installation required - just click the "Open with GitPod" in the <a href="https://github.com/ANRGUSC/tendermint_demo">GitHub Repo</a>!
                        </p>
                    </Col>
                </Row>
                <Row className='mt-4'>
                {/* </Row>
                <Row>   */}
                    <Col xs={12} sm={8} lg={10}>
                    {/* <Col> */}
                        <p>
                            <a href="https://kubishi.com">Kubishi</a> is an online dictionary and encyclopedia for Owens Valley Paiute language and culture.
                            The Owens Valley Paiute language is <a href='http://www.endangeredlanguages.com/lang/4692'>critically endangered</a>.
                            Kubishi is one resource in the <a href='http://www.ovcdc.com/blog/language/'>fight</a> (led by Tribes of the Owens Valley) to reverse the damage inflicted by generations of forced assimilation and colonialism.
                            The goal of this project is to help promote and preserve Owens Valley Paiute language and culture, but also to provide an open-source toolset for other tribal nations to do the same.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} lg={2} className='text-center'>
                    {/* <Col> */}
                        <h3>Kubishi</h3>
                        <SocialIcon key='social-facebook' url="https://facebook.com/kubishi" className="mr-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-instagram' url="https://instagram.com/ovkubishi" className="m-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-twitter' url="https://twitter.com/ovkubishi" className="m-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-github' url="https://github.com/kubishi/kubishi" className="m-1" style={SOCIAL_STYLE} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Projects;