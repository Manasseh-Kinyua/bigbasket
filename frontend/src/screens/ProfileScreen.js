import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import DoneIcon from '@mui/icons-material/Done';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { editUserProfile, getUserDetails } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { USER_EDIT_PROFILE_RESET } from '../constants/userConstants';
import { getUserOrders } from '../actions/orderActions';

function ProfileScreen() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userOrders = useSelector(state => state.userOrders)
    const {loading: loadingOrders, error: errorOrders, orders} = userOrders

    const userEditProfile = useSelector(state => state.userEditProfile)
    const {loading: loadingEditProfile, error: errorEditProfile, success: successEditProfile} = userEditProfile

    useEffect(() => {
        if(!userInfo) {
            navigate('/login')
        } else if(!user || successEditProfile || user.id !== userInfo.id) {
            dispatch({type: USER_EDIT_PROFILE_RESET})
            dispatch(getUserDetails('profile'))
            dispatch(getUserOrders())
        } else {
            setName(user.name)
            setEmail(user.email)
        }
    }, [dispatch, userInfo, user, navigate, successEditProfile])

    const submitEditProfile = (e) => {
        e.preventDefault()

        if(password != confirmPassword) {
            setMessage("Passwords do not match")
        } else {
            dispatch(editUserProfile({
                id: user.id,
                name: name,
                email: email,
                password: password
            }))
        }
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col md={4}>
                <h2 className='text-light'>PROFILE/UPDATE</h2>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}
                <Form onSubmit={submitEditProfile}>
                    {loadingEditProfile && <Loader/>}
                    {errorEditProfile && <Message variant='danger'>{errorEditProfile}</Message>}
                    {message && <Message variant='info'>{message}</Message>}
                    <Form.Group className='my-4' controlId='name'>
                        <Form.Label className='text-light'>Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='email'>
                        <Form.Label className='text-light'>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='password'>
                        <Form.Label className='text-light'>Password</Form.Label>
                        <Form.Control
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='confirmpassword'>
                        <Form.Label className='text-light'>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>

                    <Button
                        type='submit'
                        style={{backgroundColor:'red', width:'100%', marginTop:'1rem'}}>Update</Button>
                </Form>
            </Col>
            <Col md={8}>
                <h2 className='text-light'>MY ORDERS</h2>
                {loadingOrders ? (
                    <Loader />
                ) : errorOrders ? (
                    <Message variant='danger'>{errorOrders}</Message>
                ) : (
                    <Table striped responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>DATE</th>
                                <th>TOTAL PRICE</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.created.substring(0,10)}</td>
                                    <td style={{color:'#FF4500'}}>${order.totalPrice}</td>
                                    <td>
                                        {order.paid ? (
                                            <DoneIcon style={{color:'green'}} />
                                        ) : (
                                            <CancelOutlinedIcon style={{color:'red'}}  />
                                        )}
                                    </td>
                                    <td>
                                        {order.delivered ? (
                                            <DoneIcon style={{color:'green'}} />
                                        ) : (
                                            <CancelOutlinedIcon style={{color:'red'}}  />
                                        )}
                                    </td>
                                    <td>
                                        <LinkContainer style={{backgroundColor:'#FF4500'}} to={`/order/${order.id}`}>
                                            <Button
                                                className='btn-sm'
                                                style={{backgroundColor:'#FF4500'}}>details</Button>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProfileScreen
