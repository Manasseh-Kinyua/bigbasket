import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'

function ShippingScreen() {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    useEffect(() => {

    })

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto my-4' md={6}>
                <Form className='p-4'>
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
                        style={{backgroundColor:'red', width:'100%'}}>Proceed</Button>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShippingScreen
