import React from 'react'
import { Container, Navbar,Nav, Image } from 'react-bootstrap'

function Header() {
  return (
    <header className='fixed-nav'>
      <Navbar style={{minHeight:'10vh'}} className='bg'  variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* <LinkContainer to='/'> */}
                        <Navbar.Brand><Image style={{width:'8%', marginRight:'.6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4rK81-ngDpTadiTjXawJXtwmxEY7ND-YhQ&usqp=CAU' /><strong>BigBasket</strong></Navbar.Brand>
                    {/* </LinkContainer> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header
