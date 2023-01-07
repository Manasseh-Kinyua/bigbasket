import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Row, Col, Form, Button, Table, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { getAllOrders } from '../actions/orderActions';
import { useEffect } from 'react';
import { listProducts } from '../actions/productActions';

function ProductListScreen() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList
  console.log(products)

  useEffect(() => {
    if(!userInfo && !userInfo.isAdmin) {
      navigate('/login')
    }
    dispatch(listProducts())
  }, [dispatch, navigate, userInfo])

  const deleteProductHandler = (id) => {}

  return (
    <div>
      <Container maxWidth='xl'>
        <div style={{display:'flex', justifyContent:'flex-end'}} className='my-3'>
            <Button
                style={{backgroundColor:'#FF4500'}}>ADD PRODUCT</Button>
        </div>
        <Row>
            <h3 className='text-light'>PRODUCTS</h3>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Table>
                <thead>
                    <tr>
                        <th className='text-light'>#</th>
                        <th className='text-light'>IMAGE</th>
                        <th className='text-light'>NAME</th>
                        <th className='text-light'>PRICE</th>
                        <th className='text-light'>CATEGORY</th>
                        <th className='text-light'>BRAND</th>
                        <th className='text-light'>COLOR</th>
                        <th className='text-light'></th>
                        <th className='text-light'></th>
                    </tr>
                </thead>
                <tbody>
                  {products && products.map(product => (
                    <tr key={product.id}>
                      <th className='text-light'>{product.id}</th>
                      <th className='text-light'>
                        <Image style={{width:'10%'}} src={product.image} fluid rounded />
                      </th>
                      <th className='text-light'>{product.name}</th>
                      <th style={{color:'#FF4500'}}>${product.price}</th>
                      <th className='text-light'>{product.category.name}</th>
                      <th className='text-light'>{product.brand.brand}</th>
                      <th className='text-light'>{product.color.name}</th>
                      <th className='text-light'>
                        <LinkContainer style={{backgroundColor:'rgb(7, 0, 0)'}} to={`/admin/product/${product.id}/edit`}>
                          <Button style={{backgroundColor:'rgb(7, 0, 0)'}} className='btn-sm'><EditIcon /></Button>
                        </LinkContainer>
                      </th>
                      <th className='text-light'>
                        <Button
                          className='btn-sm'
                          style={{backgroundColor:'rgb(7, 0, 0)'}}
                          onClick={() => deleteProductHandler(product.id)}><DeleteIcon style={{color:'red'}} /></Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
        </Row>
      </Container>
    </div>
  )
}

export default ProductListScreen
