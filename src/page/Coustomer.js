import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Coustomer = () => {

    return (
        <div>
            <Container fluid>
                <h1>Everything you need  to support your customers over video call</h1>
                <p className="mb-5 mt-2 text-muted">Just install your script, add your team and start delighting your customers.</p>
                <Row >
                    <Col md={4} sm={12} lg={3}>
                        <img className='img-fluid' src='https://d33wubrfki0l68.cloudfront.net/547c23f0fd822e4a28fd46006f552e1f12ecca72/b08c3/assets/images/functionalities/agent.svg' alt="logo" />
                        <h4 className='my-4'>Agent Inbox</h4>
                        <p className='mt-2 mb-5'>Allows agents to manage their queue & answer customers from any device.</p>
                    </Col>
                    <Col md={4} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/06b119d0ca59f0162338f65a6de82e53e52503f1/a8e41/assets/images/functionalities/routing.svg" alt="" />
                        <h4 className='my-4'>Call Routing</h4>
                        <p  className='mt-2 mb-5'>oute your calls to the right agent..</p>
                    </Col>
                    <Col md={4} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/5986c99249cfbc7080c2e69cd5038fc89415af83/bc7bb/assets/images/functionalities/calendar.svg" alt="" />
                        <h4 className='my-4'>Calendar</h4>
                        <p  className='mt-2 mb-5'>Manage your team’s
                            schedules, availability and
                            workload.</p>
                    </Col>

                    <Col md={4} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/983786c17a201e90d47ca6a8b6f4e246c877eb49/dc1f5/assets/images/functionalities/crm.svg" alt="" />
                        <h4 className='my-4'>CRM Integration</h4>
                        <p  className='mt-2 mb-5'>Automatically sync
                            contact and call records
                            to your CRM..</p>
                    </Col>
                </Row>
                <br /><br /><br />
                <Row>
                    <Col md={3} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/a19504ab6837e84d03f0b402448ddd3b612de6de/9b3f3/assets/images/functionalities/recording.svg" alt="" />
                        <h3 className='my-4'>Recording</h3>
                        <p  className='mt-2 mb-5'>Use recordings to train
                            your agents to be more
                            effective.</p>
                    </Col>
                    <Col md={3} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/196963a0f28683d74b298e0678095380feb96f2b/562d5/assets/images/functionalities/notifications.svg" alt="" />
                        <h3 className='my-4'>Reminders</h3>
                        <p className='mt-2 mb-5'>Notifications and alerts to
                            agents and customers, so
                            no calls go unanswered.s agents to manage their queue & answer customers from any device.</p>
                    </Col>
                    <Col md={3} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/983786c17a201e90d47ca6a8b6f4e246c877eb49/dc1f5/assets/images/functionalities/crm.svg" alt="" />
                        <h4 className='my-4'>Scheduling</h4>
                        <p className='mt-2 mb-5'>Automatically assign
                            scheduled calls to the
                            available agent..</p>
                    </Col>
                    <Col md={3} sm={12} lg={3}>
                        <img className='img-fluid' src="https://d33wubrfki0l68.cloudfront.net/d5541bb8d7a038b15701ad6b68804e60566c70de/0edcb/assets/images/functionalities/dashboard.svg" alt="" />
                        <h4 className='my-4'>Dashboard</h4>
                        <p className='mt-2 mb-5'>Monitor response times
                            and improve the overall
                            customer experience.</p>
                    </Col>
                </Row>
                <br /><br />

                <p><Button type="button"  className="btn bg-primary text-white mb-5 px-5 py-2">Get started for free</Button></p>
            </Container>
        </div>
    );
};

export default Coustomer;