import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { deliverOrder, getOrderDetails, payOrder } from '../actions/orderActions';

function OrderScreen() {

  const params = useParams()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const orderDetails = useSelector(state => state.orderDetails)
  const {loading, error, order} = orderDetails

  const orderPay = useSelector(state => state.orderPay)
  const {loading: loadingPayOrder, error: errorPayOrder, success: successPayOrder} = orderPay

  const orderDeliver = useSelector(state => state.orderDeliver)
  const {loading: loadingDeliverOrder, error: errorDeliverOrder, success: successDeliverOrder} = orderDeliver

  if(!loading && !error && order) {
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0).toFixed(2)
  }

  useEffect(() => {
    if(!userInfo) {
      navigate('/login')
    }
    if(!order || order.id != params.id || successPayOrder || successDeliverOrder) {
      dispatch(getOrderDetails(params.id))
    }
  }, [dispatch, navigate, userInfo, params.id, successPayOrder, successDeliverOrder])

  const payOrderHandler = () => {
    dispatch(payOrder(params.id))
  }

  const deliverOrderHandler = (id) => {
    dispatch(deliverOrder(id))
  }
 
  return (
    <div>
      <Container maxWidth='xl'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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
                        {order && order.paid ? (
                          <Message variant='success'>Paid on {order.paidAt.substring(0,10)}</Message>
                        ) : (
                          <Message variant={'info'}>Not Paid</Message>
                        )}
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Delivery</h4>
                        {order && order.delivered ? (
                          <Message variant='success'>Delivered on {order.deliveredAt.substring(0,10)}</Message>
                        ) : (
                          <Message variant={'info'}>Not Delivered</Message>
                        )}
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-1'>
                    <ListGroup.Item className='p-3' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        <h4 style={{textDecoration:'underline'}} className='text-light'>Order Items</h4>
                        {order && order.orderItems < 1 ? (
                            <Message variant='info'>No Items in this order</Message>
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
                        {order && order.paid ? (
                          <Message variant='success'>Paid</Message>
                        ) : (
                          <>
                            {loadingPayOrder && <Loader />}
                            {errorPayOrder && <Message variant='danger'>{errorPayOrder}</Message>}
                            <Button
                              disabled={!userInfo}
                              style={{backgroundColor:'#FF4500', marginTop:'1rem', width:'100%'}}
                              onClick={payOrderHandler}>Pay</Button>
                          </>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}}>
                        {loading && <Loader />}
                        {error && <Message variant='danger'>{error}</Message>}
                        {order && order.delivered ? (
                          <Message variant='success'>Delivered</Message>
                        ) : (
                          <>
                            {loadingDeliverOrder && <Loader />}
                            {errorDeliverOrder && <Message variant='danger'>{errorDeliverOrder}</Message>}
                            {userInfo && userInfo.isAdmin && order && order.paid && (
                              <Button
                                disabled={!userInfo}
                                style={{backgroundColor:'#FF4500', marginTop:'1rem', width:'100%'}}
                                onClick={() => deliverOrderHandler(order.id)}>Deliver</Button>
                            )}
                          </>
                        )}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        )}
      </Container>
    </div>
  )
}

export default OrderScreen
