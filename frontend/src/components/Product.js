import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
  return (
    <Card style={{backgroundColor:'rgb(17, 17, 17)',  borderRadius:'.2rem'}}>
        <Link to={`/product/${product.id}`}>
            <Card.Img src={product.image} alt='image' />
            {console.log(product.image)}
        </Link>
        <Card.Body>
            <Link to={`/product/${product.id}`}>
                <Card.Title className='text-light'>{product.name}</Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'orange'} />
            </Card.Text>
            <Card.Text>
                <strong style={{fontSize:'1.2rem'}} className='orange-txt'>${product.price}</strong>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
