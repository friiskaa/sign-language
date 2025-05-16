import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { teamMembers } from '../data/index';

const AboutPage = () => {
  return (
    <div className='aboutpage min-vh-100 mb-5'>
      <Container>
        <div className="text-center mb-5">
          <h3 className='fw-bold mb-2'>About SiLa</h3>
          <p>
            SiLa is a cutting-edge sign language translation application designed to bridge communication gaps between the deaf community and the hearing world. Our mission is to make communication accessible for everyone.
          </p>
        </div>

        <div className="text-center">
          <h3 className='fw-bold mb-2'>Our Team</h3>
          <p>
            Meet the talented individuals behind Sila who are passionate about making communication accessible for everyone.
          </p>
        </div>
        
        <Row className='g-3'>
          {teamMembers.map((member, index) => (
            <Col md={4} className="d-flex justify-content-center" key={index}>
              <Card className="team-card text-center p-3 shadow-sm rounded-4" style={{ width: '100%', maxWidth: '300px' }}>
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mx-auto"
                  style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-primary">{member.role}</Card.Subtitle>
                  <Card.Text className="text-muted" style={{ fontSize: '14px' }}>
                    {member.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default AboutPage