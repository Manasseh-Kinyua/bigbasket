import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const redirect = searchParams.get('redirect') ? searchParams.get('redirect') : '/products'

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate])

    const submitLoginHandler = (e) => {
        e.preventDefault()

        dispatch(login(
            email, password
        ))
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto my-4' md={6}>
                <Form className='p-4' onSubmit={submitLoginHandler}>
                    <h1 className='text-light'>Sign In</h1>
                    {loading && <Loader/>}
                    {error && <Message variant='danger'>{error}</Message>}
                    <Form.Group className='my-4' controlId='email'>
                        <Form.Label className='text-light'>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='password'>
                        <Form.Label className='text-light'>Password</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Button
                        type='submit'
                        style={{backgroundColor:'red', width:'100%'}}>Login</Button>

                    <p className='text-light'>Are you a new customer? <Link className='text-light' to={redirect ? `/register?redirect=${redirect}` : '/register'}>Sign Up</Link></p>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginScreen
