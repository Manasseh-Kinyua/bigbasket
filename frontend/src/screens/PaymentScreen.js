import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button } from 'react-bootstrap'

function PaymentScreen() {

    const [paymentMethod, setPaymentMethod] = useState('Mpesa')

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto' md={6}>
                <h1 className='text-light'>Payment</h1>
                <Form>
                    <Form.Group>
                        <Form.Label className='text-light'>Select Payment Method</Form.Label>
                        <Form.Check
                            type='radio'
                            label='Mpesa'
                            id='Mpesa' 
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            style={{color:'orange'}}></Form.Check>
                    </Form.Group>
                    <Button
                        type='submit'
                        style={{backgroundColor:'#FF4500', marginTop:'1rem'}}>Save</Button>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PaymentScreen
