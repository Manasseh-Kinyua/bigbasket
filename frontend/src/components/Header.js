import React from 'react'
import { Container, Navbar, Nav, Row, Image } from 'react-bootstrap'

function Header() {
  return (
    <header className='fixed-nav'>
      <Navbar style={{minHeight:'10vh'}} className='bg'  variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* <LinkContainer to='/'> */}
                        <Navbar.Brand><Image style={{width:'8%', marginRight:'.6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ML0x0ClmUtqfkoMKDWwqNPYUZpSb_0yh0D1hsvcBYavfJ1YhWxYZCP_GlzAO0bl9JHE&usqp=CAU' /><strong>BigBasket</strong></Navbar.Brand>
                    {/* </LinkContainer> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                          <Nav.Link href='cart'>Cart</Nav.Link>
                          <Nav.Link href='login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header
