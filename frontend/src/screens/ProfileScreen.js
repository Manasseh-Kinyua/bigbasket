import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { stripBasename } from '@remix-run/router';
import { editUserProfile, getUserDetails } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

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
    console.log(userInfo)

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userEditProfile = useSelector(state => state.userEditProfile)
    const {loading: loadingEditProfile, error: errorEditProfile, success: successEditProfile} = userEditProfile

    useEffect(() => {
        if(!userInfo) {
            navigate('/login')
        } else if(!user || user.id !== userInfo.id) {
            dispatch(getUserDetails('profile'))
        } else {
            setName(user.name)
            setEmail(user.email)
        }
    }, [dispatch, userInfo, user, navigate])

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
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProfileScreen
