import React from 'react';
import { Col, Row,Button, Container } from 'react-bootstrap';
import './style.css'

const Home = () => {
    return (
        <div>
            <Container  className='home_bg py-5'>
            <Row className="p-y px-2">
                <Col md={6} sm={12}>
                    <div className='mt-5 '>
                        <h1 className='text-bolder text-white pt-5'>Meet your customers <br /> face-to-face</h1>
                        <h4 className='text-bolder text-warning py-3'> Instantly on your website/app</h4>
                        <p className='text-white py-3'> Integrate video calling on your website/app in under 5 minutes. Showcase your products, assist them with their purchase or help resolve issues faster with video. </p>

                         <div className='px-5'>
                         <Button  className="btn btn-dark px-3 py-2 rounded px-5 m-3  bg-danger">Register for a demo <i class="fas fa-long-arrow-alt-right"></i></Button>
                            </div>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                   <div className=''>
                   <img className='img_background img-fluid p-5' src="https://d33wubrfki0l68.cloudfront.net/b4ad21600801d202593fc44cdc50297edd5269c3/9368a/assets/images/hero_mockup.png" alt="" />
                   </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Home; 