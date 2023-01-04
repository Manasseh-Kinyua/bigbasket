import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import { Row, Col, ListGroup, Image, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { addToCart } from '../actions/cartActions'

function CartScreen() {

    const params = useParams()

    const dispatch = useDispatch()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const quantity = searchParams.get('quantity') ? searchParams.get('quantity') : ''
    console.log(quantity)

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log('CARTITEMS.........', cartItems)

    useEffect(() => {
      if(params.id) {
        dispatch(addToCart(params.id, quantity))
      }
    }, [dispatch, params.id, quantity])

    const removeFromCartHandler = (id) => {

    } 


  return (
    <div>
      <Container maxWidth='xl'>
        <Row className='mt-4'>
          <Link className='text-light my-3' to='/products'>Back to Products</Link>
          <Col md={8}>
            <h3 className='text-light'>MY CART</h3>

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
        </Row>
      </Container>
    </div>
  )
}

export default CartScreen
