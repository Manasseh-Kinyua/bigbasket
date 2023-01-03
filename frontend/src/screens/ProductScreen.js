import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen() {

  const params = useParams()

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
  console.log(product)

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id])

  return (
    <div>
      <Container maxWidth='xl'>
        <Link className='text-light my-5' to='/products'>Back to Products</Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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
        )}
      </Container>
    </div>
  )
}

export default ProductScreen
