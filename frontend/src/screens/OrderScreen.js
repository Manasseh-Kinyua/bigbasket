import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getOrderDetails } from '../actions/orderActions';

function OrderScreen() {

  const params = useParams()

  const dispatch = useDispatch()

  const orderDetails = useSelector(state => state.orderDetails)
  const {loading, error, order} = orderDetails

  if(!loading && !error && order) {
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0).toFixed(2)
  }

  useEffect(() => {
    dispatch(getOrderDetails(params.id))
  }, [dispatch, params.id])

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
          <h1 className='text-light'>Order</h1>
          <Col md={8}>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Shipping To</h4>
                        <p className='text-light'>Customer: {order && order.user.name}</p>
                        <p className='text-light'>Email: <a className='text-light' href={order && order.user.email}>{order && order.user.email}</a></p>
                        <p className='text-light'>Address: {order && order.shippingAddress.address}</p>
                        <p className='text-light'>City: {order && order.shippingAddress.city}</p>
                        <p className='text-light'>Postal Code: {order && order.shippingAddress.postalCode}</p>
                        <p className='text-light'>Country: {order && order.shippingAddress.country}</p>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Payment</h4>
                        <p className='text-light'>Payment Method: {order && order.paymentMethod}</p>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Order Items</h4>
                        {order && order.orderItems < 1 ? (
                            <Message variant='info'>No Items in your cart. Add Items to your cart in order to place order</Message>
                        ) : (
                            <>
                                {order && order.orderItems.map(item => (
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
                                <p style={{color:'#FF4500'}}>${order && order.itemsPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'>Shipping Price</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${order && order.shippingPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'>Tax</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${order && order.taxPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-light'>Total Price</p>
                            </Col>
                            <Col md={4}>
                                <p style={{color:'#FF4500'}}>${order && order.totalPrice}</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        {loading && <Loader />}
                        {error && <Message variant='danger'>{error}</Message>}
                        <Button
                            style={{backgroundColor:'#FF4500', marginTop:'1rem', width:'100%'}}
                            >Place Order</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OrderScreen
