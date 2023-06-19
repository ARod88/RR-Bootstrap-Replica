import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function StoreListings() {
  return (
    <div>
      <h2>Browse Stores In LA</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
          <Row>
            <Col xs=".5">
              <Image src="./Aldi-Logo.png" thumbnail width={"220px"} className='img-fluid'/>
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image src=".\sprouts-farmers-market-logo.jpg" thumbnail width={"220px"} className='img-fluid'/>
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image src=".\krogerlogo.jpg" roundedCircle width={"220px"} className='img-fluid'/>
            </Col>
            <Col md="6">
              <h5 text-align={'center'}style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>

      
    </div>
  );
}

export default StoreListings;
