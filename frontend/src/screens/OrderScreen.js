import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';

function OrderScreen() {

  useEffect(() => {

  })

  return (
    <div>
      <Container maxWidth='xl'>
        <h1 className='text-light'>Order</h1>
        <Row>
          <Col md={8}></Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default OrderScreen
