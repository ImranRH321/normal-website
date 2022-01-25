import React from 'react';

import { Row, Col, Container, Button } from 'react-bootstrap';

const Book = () => {
    return (
        <div>
            <Container className='mt-5'>
                <p>Worried about missing calls from customers?</p>
                <h1 className='mb-5'>Book Calls. Unblock Experience.</h1>
                <Row>
                    <Col md={6} sm={12} className='p-3'>
                        <video  className="img-fluid border-danger"   src='https://d33wubrfki0l68.cloudfront.net/bf278b31b18fa00ac614f9013d43511c16994936/dd5b5/assets/images/flows/scheduling.mp4' controls loop muted> </video>         
                           </Col>

                            <Col md={6} sm={12} className='p-3'>
                                <h3 className='pt-5'>Schedule callback when you are not around</h3>
                                <p><i className="px-3 text-danger fas fa-angle-double-right"></i>Automatically capture contact details and schedule callback</p>
                                <p><i className="px-3 text-danger fas fa-angle-double-right"></i>Book meeting only during your office hours</p>
                                <p><i className="px-3 text-danger fas fa-angle-double-right"></i>Use any software to complete the call- Zoom, Meet, or just phone</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={6} sm={12} >
                                <h2 className='pt-5'>Sync your team’s calendar and manage schedules without a separate calendar software</h2>
                                <p><i className="px-3 text-danger fas fa-angle-double-right"></i>Show availability across your agents’ calendar</p>
                                <p><i className="px-3 text-danger fas fa-angle-double-right"></i>Send reminders so that they don’t forget their appointments</p>
                                <p><i className="px-3 text-danger fas fa-angle-double-right"></i>Add calls to your calendar or CRM</p>
                            </Col>

                            <Col md={6} sm={12} >
                               <div>
                               <video className='img-fluid p-5' src="https://d33wubrfki0l68.cloudfront.net/5a005283f0208c9dccd235627a9794189b51612f/cc817/assets/images/flows/google-calendar.mp4" controls autoPlay muted loop></video>
                               </div>
                            </Col>
                        </Row> 
                        <div className='px-5'>
                         <Button  className="btn btn-warning mx-auto px-3 py-2 rounded px-5 m-3  bg-danger">Register for a demo <i class="fas fa-long-arrow-alt-right"></i></Button>
                            </div>
                    </Container>
                </div>
                );
};

                export default Book;