import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

function RegisterScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const redirect = searchParams.get('redirect') ? searchParams.get('redirect') : '/products'

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate])

    const submitRegisterHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMessage("Passwords do not match") 
        } else {
            dispatch(register(
                name, email, password
            ))
        }
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto my-4' md={6}>
                <Form className='p-4' onSubmit={submitRegisterHandler}>
                    <h1 className='text-light'>Sign Up</h1>
                    {loading && <Loader/>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {message && <Message variant='info'>{message}</Message>}
                    <Form.Group className='my-4' controlId='name'>
                        <Form.Label className='text-light'>Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter full name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
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
                    <Form.Group className='my-4' controlId='confirmpassword'>
                        <Form.Label className='text-light'>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Button
                        type='submit'
                        style={{backgroundColor:'red', width:'100%'}}>Register</Button>

                    <p className='text-light'>Already have an accopunt? <Link className='text-light' to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link></p>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterScreen
