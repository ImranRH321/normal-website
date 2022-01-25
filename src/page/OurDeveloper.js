import React from 'react';
import { Row, Col, Container,Button } from 'react-bootstrap';

const OurDeveloper = () => {
    return (
        <div>
            <Container className="compani_banner">
                <Row>
                    <Col md={6} sm={12} className=''>
                        <h1 className='py-5'>Integrate in under 5  minutes</h1>
                        <p><i className="fs-4 text-danger fas fa-caret-right"></i> Add just a few lines of script to your website and get going.</p>
                        <p><i className="fs-4 p-2 text-danger fas fa-caret-right"></i> No-code installation for Shopify, Wordpress and via Google Tag Manager.</p>
                        <p><i className="fs-4 p-2 text-danger fas fa-caret-right"></i> Use our javascript API and integrate video calling from any workflow.</p>
                        <Button  className="btn btn-warning mx-auto px-3 py-2 rounded px-5 mt-5  bg-danger">Register for a demo <i class="fas fa-long-arrow-alt-right"></i></Button>
                    </Col>

                    <Col md={6} sm={12} >
                        <img className="img-fluid" src="https://d33wubrfki0l68.cloudfront.net/657891b529d662aec9a03d4abb7f8aefdcc9a787/8f3a0/assets/images/integration/circle.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurDeveloper;