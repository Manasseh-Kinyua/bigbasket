import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom';

function ShippingScreen() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    console.log(shippingAddress)

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitShippingAddressHandler = (e) => {
      e.preventDefault()

      dispatch(saveShippingAddress({
        address, city, postalCode, country
      }))
      navigate('/payment')
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto my-4' md={6}>
                <CheckoutSteps style={{color:'orange'}}  step1 step2/>
                <Form className='p-4' onSubmit={submitShippingAddressHandler}>
                    <h1 className='text-light'>Shipping</h1>
                    <Form.Group className='my-4' controlId='address'>
                        <Form.Label className='text-light'>Address</Form.Label>
                        <Form.Control
                            required
                            placeholder='Enter Address'
                            value={address ? address : ''}
                            onChange={(e) => setAddress(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='city'>
                        <Form.Label className='text-light'>City</Form.Label>
                        <Form.Control
                            required
                            placeholder='Enter City'
                            value={city ? city : ''}
                            onChange={(e) => setCity(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='postalcode'>
                        <Form.Label className='text-light'>Postal Code</Form.Label>
                        <Form.Control
                            required
                            placeholder='Enter Postal Code'
                            value={postalCode ? postalCode : ''}
                            onChange={(e) => setPostalCode(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='country'>
                        <Form.Label className='text-light'>Country</Form.Label>
                        <Form.Control
                            required
                            placeholder='Enter Country'
                            value={country ? country : ''}
                            onChange={(e) => setCountry(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Button
                        type='submit'
                        style={{backgroundColor:'red', width:'100%'}}>Proceed</Button>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShippingScreen
