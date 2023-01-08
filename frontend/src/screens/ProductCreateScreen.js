import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function ProductCreateScreen() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')

    const submitCreateProductHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto' md={6}>
                <h3 className='text-light'>PRODUCT/CREATE</h3>
                <Form onClick={submitCreateProductHandler}>
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
                    <Form.Group className='my-4' controlId='category'>
                        <Form.Label className='text-light'>Product Category</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Product Category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='brand'>
                        <Form.Label className='text-light'>Product Brand</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Product Brand'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='color'>
                        <Form.Label className='text-light'>Product Color</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Product Color'
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='price'>
                        <Form.Label className='text-light'>Product Price</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Enter Product Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='stock'>
                        <Form.Label className='text-light'>Product Stock</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Enter Product Stock'
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
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductCreateScreen
