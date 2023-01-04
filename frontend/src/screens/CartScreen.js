import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import { Row, Col, ListGroup, Image, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen() {

    const params = useParams()

    const dispatch = useDispatch()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const quantity = searchParams.get('quantity') ? searchParams.get('quantity') : ''

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
      if(params.id) {
        dispatch(addToCart(params.id, quantity))
      }
    }, [dispatch, params.id, quantity])

    const removeFromCartHandler = (id) => {
      if(window.confirm("Are you sure you want to remove this item from your cart?")) {
        dispatch(removeFromCart(id))
      }
    } 

  return (
    <div>
      <Container maxWidth='xl'>
        <Row className='mt-4'>
          <Link className='text-light my-3' to='/products'>Back to Products</Link>
          <h3 className='text-light'>MY CART</h3>
          <Col md={8}>
            {cartItems.length < 1 ? (
              <Message variant='info'>Ooops!!! Seems like you have not started shopping. Shop in order to see your Cart</Message>
            ) : (
              <ListGroup>
                {cartItems.map(item => (
                  <div key={item.product} className='flexed p-3 m-2 bg'>
                    <Image src={item.image} alt='item.name' style={{width:'10%'}} className='mx-1' />
                    <Link to={`/product/${item.product}`} className='text-light mx-1'>{item.name}</Link>
                    <strong className='orange-txt mx-1'>${item.price}</strong>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          as='select'
                          value={item.quantity}
                          onChange={(e) => dispatch(addToCart(Number(item.product), Number(e.target.value)))}
                          style={{backgroundColor:'black', color:'white'}}>
                            {
                              [...Array(item.countInStock).keys()].map(x => (
                                <option value={x+1} key={x+1}>{x+1}</option>
                                ))
                             }
                        </Form.Control>
                      </Form.Group>
                    </Form>
                    <Button onClick={() => removeFromCartHandler(item.product)} style={{backgroundColor:'rgb(17, 17, 17)'}}><DeleteIcon /></Button>
                  </div>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}} className='p-3'>
                <h2 className='text-light'>Cart Subtotal</h2>
                <Row className='p-3'>
                  <Col md={6}>
                    <h3 className='text-light small-letters'>Total Items</h3>
                  </Col>
                  <Col md={6}>
                    <h3 style={{color:'#FF4500'}}>{cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)}</h3>
                  </Col>
                </Row>
                <Row className='p-3'>
                  <Col md={6}>
                    <h3 className='text-light small-letters'>Total Price</h3>
                  </Col>
                  <Col md={6}>
                    <h3 style={{color:'#FF4500'}}>${cartItems.reduce((acc, item) => acc + Number(item.quantity) * Number(item.price), 0)}</h3>
                  </Col>
                </Row>
                <Row className='p-3'>
                  <Button style={{backgroundColor:'#FF4500'}}>Proceed to Checkout</Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CartScreen
