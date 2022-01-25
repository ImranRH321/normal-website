import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const Visitor = () => {
    return (
        <div>
            <Container className='margin_top'>
                <h2>Seamless one-on-one conversations with
                    your website visitors</h2>
                <p className='text-muted fst-bolder pb-5 pt-2'>Connect your customers to a <b>human</b> instantly without taking them away from your website.</p>
                <Row className="py-5">
                    <Col md={6} sm={12} className="text-left">
                        <div className="">
                            <h4 className='py-3'><img className='px-2' src="https://d33wubrfki0l68.cloudfront.net/2ee68f0c5fcc9e34cc52d8b4454405ebc68aaadb/cc94e/assets/images/seamless/devices.svg" alt="" /> Works on all devices</h4>
                            <h4 className='py-3'><img className='px-2' src="https://d33wubrfki0l68.cloudfront.net/1dcfa70789b4e91f383030b5d1c07cff65762757/f865a/assets/images/seamless/click.svg" alt="" /> Works on all devices</h4>
                            <h4 className='py-3'><img className='px-2' src="https://d33wubrfki0l68.cloudfront.net/33a49a1d80efb21a07335a0169df50984ac16ab0/d0684/assets/images/seamless/optional.svg" alt="" /> Works on all devices</h4>
                            <h4 className='py-3'><img className='px-2' src="https://d33wubrfki0l68.cloudfront.net/086a8fcf866d426bf5d262121e2ae213e0119a22/beb6a/assets/images/seamless/no_downloads.svg" alt="" /> Works on all devices</h4>

                            <br></br>
                            <Button  className="btn btn-dark border-none px-3 py-2 rounded px-5 m-3  bg-success">Register for a demo <i class="fas fa-long-arrow-alt-right"></i></Button>
                        </div>

                    </Col>
                    <Col md={6} sm={12} >
                        {/* <video className='w-100' src='https://i.ibb.co/7WXBZ8R/Frame.png' controls autoPlay> </video> */}
                        <img src="https://i.ibb.co/7WXBZ8R/Frame.png" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Visitor;