import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function UserEditScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState('')

    useEffect(() => {

    })

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <Col className='mx-auto my-5' md={4}>
                <h3 className='text-light'>USER/EDIT ADMIN STATUS</h3>
                <Form>
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
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserEditScreen
