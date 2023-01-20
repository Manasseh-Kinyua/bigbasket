import React from 'react'
import Container from '@mui/material/Container';
import { Button, Row, Col, Card, Image, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import GuestUser from '../components/GuestUser';

function LandingScreen() {

  const navigate = useNavigate()

  const toShopping = () => {
    navigate('/products')
  }

  return (
    <div>
      <Alert variant='success'>
        If you are a Recruiter and dont want to create an account, You can login as a Guest User to try my app. <GuestUser />
      </Alert>
      <Row className='hero'>
        <Col className='flex-col' md={6}>
          <h3 className='orange-txt'>SHOP WITH THE BEST ONLINE STORE AROUND</h3>
          <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
          <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
          <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
          <p className='text-light'>Shop everything you need in one place</p>
          <p className='text-light'>Get urgent help instantly when you need it</p>
          <Button style={{backgroundColor:'#FF4500'}} onClick={toShopping}>START SHOPPING</Button>
        </Col>
        <Col className='flex' md={6}>
          {/* <Image style={{width:'80%'}} src='https://bigbasket-bucket.s3.eu-west-3.amazonaws.com/bc8f4f671dec65db9428fc56ffb5aeb1-removebg-preview.png' alt='img' /> */}
          <Image style={{width:'100%'}} src='https://bigbasket-bucket.s3.eu-west-3.amazonaws.com/shoppinggirl3-removebg-preview.png' alt='img' />
          <span className='flex hero-box1'>
            <Image style={{width:'15%'}} src='https://bigbasket-bucket.s3.eu-west-3.amazonaws.com/happy-removebg-preview.png'/>
            <small className='text-light'>Shop happily</small>
          </span>
          <span className='flex hero-box2'>
            <Image style={{width:'15%'}} src='https://bigbasket-bucket.s3.eu-west-3.amazonaws.com/love-removebg-preview.png'/>
            <small className='text-light'>With Love</small>
          </span>
          <span className='flex hero-box3'>
            <Image style={{width:'15%'}} src='https://bigbasket-bucket.s3.eu-west-3.amazonaws.com/friends-removebg-preview.png'/>
            <small className='text-light'>With friends</small>
          </span>
        </Col>
      </Row>
      <Container className='my-3' style={{minHeight:'60vh', marginTop:'4rem'}}  maxWidth='lg'>
        <h4 className='text-light' style={{textAlign:'center'}}>TOP PRODUCTS</h4>
        <Carousel />
      </Container>
      <Container style={{minHeight:'30vh', marginTop:'4rem'}} maxWidth='lg'>
        <h4 className='text-light' style={{textAlign:'center'}}>Shop Across Multiple Categories</h4>
        <div className='flex'>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>ELECTRONICS</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>PHONES</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>GAMING</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>SHOES</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4>MORE...</h4>
          </Card>
        </div>
      </Container>
      <Container className='my-3' style={{minHeight:'30vh', marginTop:'4rem'}} maxWidth='lg'>
        <h4 className='text-light' style={{textAlign:'center'}}>And Multiple Brands you love</h4>
        <div className='flex'>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>APPLE</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>SONY</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>NIKE</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4 style={{color:'#FF4500'}}>META</h4>
          </Card>
          <Card style={{backgroundColor:'#070000', padding:'2rem', margin:'1rem', borderRadius:'1rem', border:'1px solid #FF4500'}}>
            <h4>MORE...</h4>
          </Card>
        </div>
      </Container>
      
    </div>
  )
}

export default LandingScreen
