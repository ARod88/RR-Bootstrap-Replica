import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HomeImage() {
  return (
    <Container className='home-image' style={{ backgroundColor: '#dfeed4' }}>
      <Row>
        <Col xs={{ span: 6, offset: 6 }} md={{ span: 4, offset: 8 }}>
          <Image src="./insta-background.png" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeImage;
