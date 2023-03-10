import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { Row, Col, Alert } from 'react-bootstrap'
import { listBrands, listCategories, listColors, listProducts } from '../actions/productActions'
import Product from '../components/Product';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SearchBox from '../components/SearchBox';
import GuestUser from '../components/GuestUser';

function ProductsScreen() {

  const dispatch = useDispatch()

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  let keyword = searchParams.get('keyword') ? searchParams.get('keyword') : ''

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  const categoryList = useSelector(state => state.categoryList)
  const {loading: loadingCategories, error: errorCategories, categories} = categoryList

  const brandList = useSelector(state => state.brandList)
  const {loading: loadingBrands, error: errorBrands, brands} = brandList

  const colorList = useSelector(state => state.colorList)
  const {loading: loadingColors, error: errorColors, colors} = colorList

  useEffect(() => {
    dispatch(listProducts(keyword))
    dispatch(listCategories())
    dispatch(listBrands())
    dispatch(listColors())
  }, [dispatch, keyword])

  return (
    <div>
      <Container maxWidth="xl">
      <Alert variant='success'>
        If you are a Recruiter and dont want to create an account, You can login as a Guest User to test my app. <GuestUser />
      </Alert>
        <Row className='mt-4'>
          <Col md={3}>
            <Row>
              <SearchBox />
            </Row>
            <h4 className='white-txt'>Filters</h4>
            <Link to='/products'><Chip style={{color:'#FF4500', border: '.1rem solid #FF4500'}} variant='outlined' label='All' /></Link>
            <Row className='my-1'>
              <h6 className='text-light'>categories</h6>
              {loadingCategories ? (
                <Loader />
              ) : errorCategories ? (
                <Message variant='danger'>{errorCategories}</Message>
              ) : (
                <>
                {categories && categories.map(category => (
                  <Col className='my-1' md={4} sm={2} key={category.id}>
                    <Link className='pointer' to={`/products?keyword=${category.name}`}><Chip style={{color:'#FF4500', border: '.1rem solid #FF4500'}} variant='outlined' label={category.name} /></Link>
                  </Col>
                ))}
                </>
              )}
            </Row>
            <Row className='my-1'>
              <h6 className='text-light'>brands</h6>
              {loadingBrands ? (
                <Loader />
              ) : errorBrands ? (
                <Message variant='danger'>{errorBrands}</Message>
              ) : (
                <>
                {brands && brands.map(brand => (
                  <Col className='my-1' md={4} sm={2} key={brand.id}>
                    <Link className='pointer' to={`/products?keyword=${brand.name}`}><Chip style={{color:'#FF4500', border: '.1rem solid #FF4500'}} variant='outlined' label={brand.name} /></Link>
                  </Col>
                ))}
                </>
              )}
            </Row>
            <Row className='my-1'>
              <h6 className='text-light'>colors</h6>
              {loadingColors ? (
                <Loader />
              ) : errorColors ? (
                <Message variant='danger'>{errorColors}</Message>
              ) : (
                <>
                {colors && colors.map(color => (
                  <Col className='my-1' md={4} sm={2} key={color.id}>
                    <Link className='pointer' to={`/products?keyword=${color.name}`}><Chip className='pointer' style={{color:'#FF4500', border: '.1rem solid #FF4500'}} variant='outlined' label={color.name} /></Link>
                  </Col>
                ))}
                </>
              )}
            </Row>
          </Col>
          <Col style={{marginTop:'5rem'}} md={9}>
            <h4 className='white-txt'>Products</h4>
            {products && products.length < 1 && (
              <Message variant='info'>There are no products here yet</Message>
            )}
            {loading ? (
              <Loader />
            ) : error  ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Row>
                {products.map(product => (
                  <Col key={product.id} md={4} className='py-1 my-4'>
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
