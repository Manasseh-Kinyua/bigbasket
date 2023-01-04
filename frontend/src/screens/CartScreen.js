import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
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
      dispatch(addToCart(params.id, quantity))
    }, [dispatch, params.id, quantity])
  return (
    <div>
      <Container maxWidth='xl'>

      </Container>
    </div>
  )
}

export default CartScreen
