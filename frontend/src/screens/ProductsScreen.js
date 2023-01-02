import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

function ProductsScreen() {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList
  console.log(products)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <Container maxWidth="xl">
        <Row>
          <Col md={3}>
            <h4 className='white-txt'>Filters</h4>
          </Col>
          <Col md={9}>
            <h4 className='white-txt'>Products</h4>
            {loading ? (
              <Loader />
            ) : error  ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Row>
                {products.map(product => (
                  <Col key={product.id} md={3} className='py-1'>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductsScreen
