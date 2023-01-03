import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

function CartScreen() {

    const params = useParams()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const quantity = searchParams.get('quantity') ? searchParams.get('quantity') : ''
    console.log(quantity)

    useEffect(() => {

    })
  return (
    <div>
      <h1>cart</h1>
    </div>
  )
}

export default CartScreen
