import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Navbar, Nav, Row, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 0,
      top: -2,
      // border: `2px solid ${theme.palette.background.paper}`,
      border: `2px solid orange`,
      background: '#FF4500',
      padding: '0 4px',
    },
  }));
  return (
    <header className='fixed-nav'>
      <Navbar style={{minHeight:'10vh'}} className='bg'  variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><Image style={{width:'8%', marginRight:'.6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ML0x0ClmUtqfkoMKDWwqNPYUZpSb_0yh0D1hsvcBYavfJ1YhWxYZCP_GlzAO0bl9JHE&usqp=CAU' /><strong>BigBasket</strong></Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                          <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartItems.length} color="secondary">
                              <ShoppingCartIcon style={{color:'#FF4500'}} />
                            </StyledBadge>
                          </IconButton>
                        </LinkContainer>

                          <LinkContainer to='/login'>
                            <Nav.Link className='px-5'>Login</Nav.Link>
                          </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header
