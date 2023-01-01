import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center text-dark py-3'>
                copyright &copy; Taskjar
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer