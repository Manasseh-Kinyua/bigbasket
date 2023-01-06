import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader';
import Message from '../components/Message';

function PlaceOrderScreen() {

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 1000 ? 0 : 10).toFixed(2)
    cart.taxPrice = (0.082 * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    useEffect(() => {

    })

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <h1 className='text-light'>Place Order</h1>
            <Col md={8}>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Shipping</h4>
                        <p className='text-light'>Address: {cart.shippingAddress.address}</p>
                        <p className='text-light'>City: {cart.shippingAddress.city}</p>
                        <p className='text-light'>Postal Code: {cart.shippingAddress.postalCode}</p>
                        <p className='text-light'>Country: {cart.shippingAddress.country}</p>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Payment</h4>
                        <p className='text-light'>Payment Method: {cart.paymentMethod}</p>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Order Items</h4>
                        {cart.cartItems && cart.cartItems < 1 ? (
                            <Message variant='info'>No Items in your cart. Add Items to your cart in order to place order</Message>
                        ) : (
                            <>
                                {cart.cartItems && cart.cartItems.map(item => (
                                <Row key={item.product}>
                                    <Col className='my-1' md={3}>
                                        <Image style={{width:'20%'}} src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col className='my-1' md={4}>
                                        <Link className='text-light' to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col className='my-1' md={4}>
                                        <small style={{color:'#FF4500'}}>{item.quantity} X ${item.price} = </small>  <small style={{color:'#FF4500'}}>${(item.quantity * item.price).toFixed(2)}</small>
                                    </Col>
                                </Row>
                            ))}
                            </>
                        )}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h3 className='text-light'>Order Summary</h3>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'> Items Price</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${cart.itemsPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'>Shipping Price</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${cart.shippingPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'>Tax</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${cart.taxPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'>Total Price</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${cart.totalPrice}</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <Button
                            style={{backgroundColor:'#FF4500', marginTop:'1rem', width:'100%'}}>Place Order</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlaceOrderScreen
