import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='bg footer'>
      <Container>
        <Row>
            <Col className=' text-light py-3'>
                <p>BigBasket Online store</p>
                <p>E-commerce</p>
            </Col>
            <Col className=' text-light py-3'>
                <h6 className='orange-txt'>Contact us</h6>
                <p>bigbasket@gmail.com</p>
                <p>01104456768</p>
                <p>P.O. Box 123232</p>
                <p>00110</p>
            </Col>
            <Col className=' text-light py-3'>
              <h6 className='orange-txt'>VISIT us</h6>
              <p>Nairobi</p>
              <p>River Side Drive,</p>
              <p>Commerce Builging,</p>
              <p>4th Floor.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
