import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='bg footer'>
      <Container>
        <Row>
            <Col className='text-center text-dark py-3'>
                copyright &copy; BigBasket
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
