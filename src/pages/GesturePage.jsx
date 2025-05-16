import React, { useRef, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { FaCamera } from 'react-icons/fa';

function GesturePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('The camera is inaccessible:', error);
      }
    };

    startCamera();
  }, []);

  return (
    <div className='gesture-page min-vh-100'>
      <Container>
        <h3 className='fw-bold'>Gesture Translation</h3>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-lg">
              <Card.Body>
                <video ref={videoRef} autoPlay playsInline className="w-100 rounded" />
                <div className="mt-3 d-flex justify-content-center">
                  <Button variant="primary" className='rounded-pill'>
                    <FaCamera className='me-2'/>
                    Start Translation
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title className="fw-semibold mb-3">Translation Result</Card.Title>
                <p className="text-muted">Hasil akan muncul di sini setelah pendeteksian gesture.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GesturePage;