import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen() {

  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  const params = useParams()

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id])

  const addToCartHandler = () => {
    navigate(`/cart/${product.id}?quantity=${quantity}`)
  }

  return (
    <div>
      <Container maxWidth='xl'>
        <Link className='text-light my-5' to='/products'>Back to Products</Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <div>
            <Row className='my-3'>
              <Col md={6}>
                <Image src={product && product.image} alt={product && product.name}/>
              </Col>
              <Col md={6}>
                <ListGroup className='p-1' style={{backgroundColor:'rgb(17, 17, 17)'}}>
                  <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)'}}>
                    <Row className='my-4'>
                      <h4 className='text-light'>{product && product.name}</h4>
                    </Row>
                    <Row className='my-4'>
                      <Col md={4}>
                        <h4 className='text-light'>Description</h4>
                      </Col>
                      <Col md={8}>
                        <p className='text-light'>{product && product.description}</p>
                      </Col>
                    </Row>
                    <Row className='my-4'>
                      <Col md={4}>
                        <h4 className='text-light'>Category</h4>
                      </Col>
                      <Col md={8}>
                        <p className='text-light'>{product.category && product.category.name}</p>
                      </Col>
                    </Row>
                    <Row className='my-4'>
                      <Col md={4}>
                        <h4 className='text-light'>Brand</h4>
                      </Col>
                      <Col md={8}>
                        <p className='text-light'>{product.brand && product.brand.name}</p>
                      </Col>
                    </Row>
                    <Row className='my-4'>
                      <Col md={4}>
                        <h4 className='text-light'>Color</h4>
                      </Col>
                      <Col md={8}>
                        <p className='text-light'>{product.color && product.color.name}</p>
                      </Col>
                    </Row>
                    <Row className='my-4'>
                      <Col md={4}>
                        <h4 className='text-light'>Price</h4>
                      </Col>
                      <Col md={8}>
                        <h3 style={{color:'#FF4500'}}>${product && product.price}</h3>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <ListGroup>
                  <h4 className='text-light'>add to cart</h4>
                  <ListGroup.Item style={{backgroundColor:'rgb(17, 17, 17)', padding:'2rem'}}>
                    <Row>
                      <Col md={4}>
                        <p className='white-txt'>Price</p>
                      </Col>
                      <Col md={8}>
                      <p className='orange-txt'>${product && product.price}</p>
                      </Col>
                    </Row>
                    <Row>
                      {product && product.countInStock < 1 ? (
                        <Message variant='danger'>You'll be notified once in stock</Message>
                      ) : (
                        <Row>
                          <Col md={4}>
                            <p className='text-light'>Quantity</p>
                          </Col>
                          <Col md={8}>
                            <Form>
                              <Form.Group>
                                <Form.Control
                                  as='select'
                                  value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}
                                  style={{backgroundColor:'black', color:'white'}}>
                                    {
                                      [...Array(product.countInStock).keys()].map(x => (
                                        <option value={x+1} key={x+1}>{x+1}</option>
                                      ))
                                    }
                                  </Form.Control>
                              </Form.Group>
                            </Form>
                            <Button
                              disabled={product && product.countInStock < 1}
                              style={{backgroundColor:'#FF4500', marginTop:'1rem', width:'100%'}}
                              onClick={addToCartHandler}>
                                Add to Cart
                            </Button>
                          </Col>
                        </Row>
                      )}
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  )
}

export default ProductScreen
