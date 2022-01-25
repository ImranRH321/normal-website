import React from 'react';
import { Col,Row,Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row className="mx-auto">
                <Col  sm={12} lg={2} className="p-2">
                        <h3>Use cases</h3>
                         <p><a href="#" className='text-decoration-none text-dark'>Retail</a></p>
                         <p><a href="#" className='text-decoration-none text-dark'>E-Commerce</a></p>
                         <p><a href="#" className='text-decoration-none text-dark '>SaaS</a></p>
                    </Col>
                <Col  sm={12} lg={2} className="p-2">
                        <h3>  Integrations</h3>
                         <p><a href="#" className='text-decoration-none text-dark'>Shopify</a></p>
                         <p><a href="#" className='text-decoration-none text-dark'>Google Tag <br /> Manager</a></p>
                         <p><a href="#" className='text-decoration-none text-dark '></a></p>
                    </Col>
                <Col  sm={12} lg={2} className="p-2">
                        <h3>Use cases</h3>
                         <p><a href="#" className='text-decoration-none text-dark'>Retail</a></p>
                         <p><a href="#" className='text-decoration-none text-dark'>E-Commerce</a></p>
                         <p><a href="#" className='text-decoration-none text-dark '>SaaS</a></p>
                    </Col>
                <Col  sm={12} lg={2} className="p-2">
                        <h3>Use cases</h3>
                         <p><a href="#" className='text-decoration-none text-dark'>Retail</a></p>
                         <p><a href="#" className='text-decoration-none text-dark'>E-Commerce</a></p>
                         <p><a href="#" className='text-decoration-none text-dark '>SaaS</a></p>
                    </Col>
                <Col  sm={12} lg={2} className="p-2">
                        <h3>Use cases</h3>
                         <p><a href="#" className='text-decoration-none text-dark'>Retail</a></p>
                         <p><a href="#" className='text-decoration-none text-dark'>E-Commerce</a></p>
                         <p><a href="#" className='text-decoration-none text-dark '>SaaS</a></p>

                         <p><img className="img-fluid"  src="https://d33wubrfki0l68.cloudfront.net/3259aa6eea9087281be4fe48eb920924ca503b3b/3c29b/assets/images/app_store.png" alt="" /></p>
                         <img className="img-fluid" src="https://d33wubrfki0l68.cloudfront.net/920e177c740923e8f2dc05bfef965eaf1a48beea/e6992/assets/images/play_store.png" alt="" />
                    </Col>
                </Row>

<hr />

                <Row>
                    <Col lg={3} sm={12} >
                        
                  </Col>
                    <Col lg={3} sm={12} >
                    © Copyright Gumstack Inc. 2021- All rights reserved
                  </Col>
                    <Col lg={3} sm={12} >
                    Terms &<br /> Conditions
                  </Col>
                    <Col lg={3} sm={12} >
                    Privacy Poli
                  </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer; 