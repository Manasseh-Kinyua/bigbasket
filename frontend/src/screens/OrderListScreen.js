import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import DoneIcon from '@mui/icons-material/Done';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { getAllOrders } from '../actions/orderActions';

function OrderListScreen() {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const {loading, error, orders} = orderList

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <h3 className='text-light'>ORDERS</h3>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className='text-light'>USER</th>
                        <th className='text-light'>DATE</th>
                        <th className='text-light'>TOTAL PRICE</th>
                        <th className='text-light'>PAID</th>
                        <th className='text-light'>DELIVERED</th>
                        <th className='text-light'></th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => (
                        <tr key={order.id}>
                            <th className='text-light'>{order.id}</th>
                            <th className='text-light'>{order.user.name}</th>
                            <th className='text-light'>{order.created.substring(0,10)}</th>
                            <th style={{color:'#FF4500'}}>${order.totalPrice}</th>
                            <th>
                                {order.paid ? (
                                    <DoneIcon style={{color:'green'}} />
                                ) : (
                                    <CancelOutlinedIcon style={{color:'red'}}  />
                                )}
                            </th>
                            <th>
                                {order.delivered ? (
                                    <DoneIcon style={{color:'green'}} />
                                ) : (
                                    <CancelOutlinedIcon style={{color:'red'}}  />
                                )}
                            </th>
                            <th>
                                <LinkContainer style={{backgroundColor:'#FF4500'}} to={`/order/${order.id}`}>
                                    <Button
                                        className='btn-sm'
                                        style={{backgroundColor:'#FF4500'}}>details</Button>
                                </LinkContainer>
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

export default OrderListScreen
