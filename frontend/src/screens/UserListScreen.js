import React from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Table } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

function UserListScreen() {
  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <h3>USERS</h3>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
        </Row>
      </Container>
    </div>
  )
}

export default UserListScreen
