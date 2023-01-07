import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import DoneIcon from '@mui/icons-material/Done';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Row, Table, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getAllUsers } from '../actions/userActions';

function UserListScreen() {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const deleteUserHandler = (id) => {}

  return (
    <div>
      <Container maxWidth='xl'>
        <Row>
            <h3 className='text-light'>USERS</h3>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th className='text-light'>#</th>
                            <th className='text-light'>NAME</th>
                            <th className='text-light'>EMAIL</th>
                            <th className='text-light'>ADMIN</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => (
                            <tr key={user.id}>
                                <td className='text-light'>{user.id}</td>
                                <td className='text-light'>{user.name}</td>
                                <td className='text-light'>{user.email}</td>
                                <td>
                                {user.isAdmin ? (
                                    <DoneIcon style={{color:'green'}} />
                                ) : (
                                    <CancelOutlinedIcon style={{color:'red'}}  />
                                )}
                                </td>
                                <td>
                                    <LinkContainer style={{backgroundColor:'rgb(7, 0, 0)'}} to={`/admin/user/${user.id}/edit`}>
                                        <Button style={{backgroundColor:'rgb(7, 0, 0)'}} className='btn-sm'><EditIcon /></Button>
                                    </LinkContainer>
                                </td>
                                <td>
                                    <Button
                                        className='btn-sm'
                                        style={{backgroundColor:'rgb(7, 0, 0)'}}
                                        onClick={() => deleteUserHandler(user.id)}><DeleteIcon style={{color:'red'}} /></Button>
                                </td>
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

export default UserListScreen
