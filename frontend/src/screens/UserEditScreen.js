import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editUserDetails, getUserDetails, getUserDetailsForAdmin } from '../actions/userActions';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { USER_DETAILS_FOR_ADMIN_RESET, USER_EDIT_DETAILS_RESET } from '../constants/userConstants';

function UserEditScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState('')

    const params = useParams()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userDetailsForAdmin = useSelector(state => state.userDetailsForAdmin)
    const {loading, error, user} = userDetailsForAdmin

    const userEditDetails = useSelector(state => state.userEditDetails)
    const {loading: loadingEdit, error: errorEdit, success: successEdit} = userEditDetails

    useEffect(() => {
      if(successEdit) {
        navigate('/admin/users')
        dispatch({type: USER_EDIT_DETAILS_RESET})
        dispatch({type: USER_DETAILS_FOR_ADMIN_RESET})
      }
      if(!user || user.id !== Number(params.id)) {
        dispatch(getUserDetailsForAdmin(params.id))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }, [dispatch, params.id, user, successEdit, navigate])

    const submitEditUserHandler = (e) => {
      e.preventDefault()

      dispatch(editUserDetails({
        id: params.id,
        name, email, isAdmin
      }))
    }

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto my-5' md={4}>
              <Link className='text-light my-5' to='/admin/users'>Back to User List</Link>
                <h3 className='text-light'>USER/EDIT ADMIN STATUS</h3>
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Message variant='danger'>{error}</Message>
                ) : (
                  <Form onSubmit={submitEditUserHandler}>
                    {loadingEdit && <Loader />}
                    {errorEdit && <Message variant='danger'>{errorEdit}</Message>}
                    <Form.Group className='my-4' controlId='name'>
                        <Form.Label className='text-light'>Name</Form.Label>
                        <Form.Control
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='email'>
                        <Form.Label className='text-light'>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{backgroundColor:'rgb(17, 17, 17)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-4' controlId='isadmin'>
                        <Form.Label className='text-light'>Is Admin</Form.Label>
                        <Form.Check
                            type='checkbox'
                            label='Is Admin'
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
                    </Form.Group>
                    <Button
                        type='submit'
                        style={{backgroundColor:'red', width:'100%'}}>Update</Button>
                </Form>
                )}
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserEditScreen
