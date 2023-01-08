import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Image, ListGroup, Form, Button, FormGroup, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listProductDetails, reviewProduct } from '../actions/productActions'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen() {

  const [quantity, setQuantity] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const params = useParams()

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const productReview = useSelector(state => state.productReview)
  const {loading: loadingReview, error: errorReview, success: successReview} = productReview

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id, successReview])

  const addToCartHandler = () => {
    navigate(`/cart/${product.id}?quantity=${quantity}`)
  }

  const submitReviewHandler = (e) => {
    e.preventDefault()

    dispatch(reviewProduct({
      id: params.id,
      rating, comment
    }))

    if(successReview) {
      setShow(true)
    }
    setRating(0)
    setComment('')
    
  }

  return (
    <div>
      <Container maxWidth='xl'>
        <Link className='text-light my-5' to='/products'>Back to Products</Link>
        <Alert variant="success" onClose={() => setShow(false)} show={show} dismissible>
          Review Submitted Successfully!
        </Alert>
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
                        <h4 className='text-light'>Stock</h4>
                      </Col>
                      <Col md={8}>
                        <p className='text-light'>{product.countInStock}</p>
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
              <Col md={4}>
                <h4 className='text-light'>Reviews</h4>
                <ListGroup>
                  {product.reviews && product.reviews.length < 1 && (
                    <Message variant='info'>There are no reviews for this product yet</Message>
                  )}
                  {product.reviews && product.reviews.map(review => (
                    <ListGroup.Item className='my-1' style={{backgroundColor:'rgb(17, 17, 17)', padding:'1rem'}} key={review.id}>
                      <p className='text-light'>@{review.name}</p>
                      <Rating value={review.rating} color={'#FF4500'}/>
                      <p className='text-light'>{review.created.substring(0, 10)}</p>
                      <p className='text-light'>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={4}>
                <h4 className='text-light'>Write Review</h4>
                {userInfo ? (
                  <Form style={{backgroundColor:'rgb(17, 17, 17)', padding:'1rem'}} onSubmit={submitReviewHandler}>
                    {loadingReview && <Loader />}
                    {errorReview && <Message variant='danger'>{errorReview}</Message>}
                  <Form.Group controlId='rating'>
                    <Row>
                    <Col  md={4}><Form.Label className='text-light'>Rating</Form.Label></Col>
                    <Col md={8}>
                    <Form.Control
                      as='select'
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      style={{backgroundColor:'rgb(7, 0, 0)'}}>
                        <option value=''>Select...</option>
                        <option value='1'>1 - Poor</option>
                        <option value='2'>2 - Fair</option>
                        <option value='3'>3 - Good</option>
                        <option value='4'>4 - Very Good</option>
                        <option value='5'>5 - Excellent</option>
                    </Form.Control>
                    </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group className='mt-2' controlId='comment'>
                    <Row>
                      <Col md={4}>
                      <Form.Label className='text-light'>Review</Form.Label>
                      </Col>
                      <Col md={8}>
                        <Form.Control
                          as='textarea'
                          row='5'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          style={{backgroundColor:'rgb(7, 0, 0)'}}>

                        </Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                    <Button
                      // disabled={loadingProductReview}
                      type='submit'
                      style={{width: '100%'}}
                      className='bg btn-small'
                      style={{backgroundColor:'#FF4500', width:'100%', marginTop:'.5rem'}}
                      >Submit</Button>
                </Form>
                ) : (
                  <Message variant='info'>Kindly login in order to write a review</Message>
                )}
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  )
}

export default ProductScreen
