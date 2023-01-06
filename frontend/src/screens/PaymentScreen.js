import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen() {

    const [paymentMethod, setPaymentMethod] = useState('Mpesa')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress.address) {
      navigate('/shipping')
    }

    const submitPaymentMethodHandler = (e) => {
      e.preventDefault()
      dispatch(savePaymentMethod(paymentMethod))
      navigate('/placeorder')
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto' md={6}>
                <h1 className='text-light'>Payment</h1>
                <CheckoutSteps step1 step2 step3/>
                <Form onSubmit={submitPaymentMethodHandler}>
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
