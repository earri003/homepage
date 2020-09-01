import React from 'react';
import {Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const SOCIAL_STYLE = {height: 25, width: 25};

function Projects() {
    return (
        <Row>
            <Col>
                <h1 className='text-center'>Projects</h1>

                <Row>
                    <Col xs={12} sm={4} lg={2}>
                        <h2>Kubishi</h2>                        
                        <SocialIcon key='social-facebook' url="https://facebook.com/kubishi" className="mr-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-instagram' url="https://instagram.com/ovkubishi" className="m-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-twitter' url="https://twitter.com/ovkubishi" className="m-1" style={SOCIAL_STYLE} />
                        <SocialIcon key='social-github' url="https://github.com/kubishi/kubishi" className="m-1" style={SOCIAL_STYLE} />
                    </Col>
                    <Col xs={12} sm={8} lg={10}>
                        <p>
                            <a href="https://kubishi.com">Kubishi</a> is an online dictionary and encyclopedia for Owens Valley Paiute language and culture.
                            The Owens Valley Paiute language is <a href='http://www.endangeredlanguages.com/lang/4692'>critically endangered</a>.
                            Kubishi is one resource in the <a href='http://www.ovcdc.com/blog/language/'>fight</a> (led by Tribes of the Owens Valley) to reverse the damage inflicted by generations of forced assimilation and colonialism.
                            The goal of this project is to help promote and preserve Owens Valley Paiute language and culture, but also to provide an open-source toolset for other tribal nations to do the same.
                        </p>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Col>
        </Row>
    );
}

export default Projects;