import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroImage from '../assets/images/sila-hero.png';
import { premiumFeatures } from '../data/index';

const HomePage = () => {
  return (
    <div className='homepage'>
        <header className='w-100 min-vh-100 d-flex align-items-center'>
            <Container>
                <Row className='header-box d-flex align-items-center'>
                    <Col lg='6'>
                        <h1 className='mb-4'>Welcome to SiLa</h1>
                        <p className='mb-4'>Experience the elegance of sign language translation. SiLa bridges communication gaps with precision and style.</p>
                        <button className='btn btn-primary btn-lg rounded-5 me-2 mb-xs-0 mb-2'>Try Gesture Translation</button>
                        <button className='btn btn-outline-primary btn-lg rounded-5 mb-xs-0 mb-2'>Learn More</button>
                    </Col>
                    <Col lg='6' className='pt-lg-0 pt-5'>
                        <img src={HeroImage} alt="SiLa Hero" />
                    </Col>
                </Row>
            </Container>
        </header>
        <div className='features w-100 min-vh-100'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold'>Premium Features</h1>
                        <p className='text-center'>Discover what makes SiLa the most elegant sign language tranlation tool available</p>
                    </Col>
                </Row>
                <Row>
                    {premiumFeatures.map((feature) => {
                        return (
                            <Col key={feature.id} md={3} className='mb-4'>
                                <Card className='card-custom'>
                                <Card.Img variant="top" src={feature.image} alt="svgrepo.com" />
                                <Card.Body>
                                    <Card.Title>{feature.title}</Card.Title>
                                    <Card.Text>{feature.text}</Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    </div>
  );
};

export default HomePage