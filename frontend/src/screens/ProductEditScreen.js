import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions';

function ProductEditScreen() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [uploading, setUploading] = useState('')

    const params = useParams()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
      if(!userInfo || !userInfo.isAdmin) {
        navigate('/login')
      } else if(!product || product.id != params.id) {
        dispatch(listProductDetails(params.id))
      } else {
        setName(product.name)
        setImage(product.image)
        setPrice(product.price)
        setStock(product.countInStock)
        setDescription(product.description)
      }
    }, [dispatch, navigate, userInfo, product, params.id])

    const submitEditProductHandler = (e) => {
      e.preventDefault()
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
          <Col className='mx-auto' md={6}>
            <h1 className='text-light'>Product/Edit</h1>
            <Link className='text-light' to='/admin/products'>Back to Product List</Link>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitEditProductHandler}>
                    {/* {loading && <Loader />} */}
                    {/* {error && <Message variant='danger'>{error}</Message>} */}
                    <Form.Group className='my-4' controlId='name'>
                        <Form.Label className='text-light'>Product Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Product Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='image'>
                        <Form.Label className='text-light'>Product Image</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Product Name'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='price'>
                        <Form.Label className='text-light'>Product Price</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            min={0}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='stock'>
                        <Form.Label className='text-light'>Product Stock</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            min={0}
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='desc'>
                        <Form.Label className='text-light'>Product Description</Form.Label>
                        <Form.Control
                            required
                            as='textarea'
                            rows={3}
                            placeholder='Enter Product Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>

                    <Button
                        type='submit'
                        style={{backgroundColor:'red', width:'100%'}}>ADD PRODUCT</Button>
                </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductEditScreen
