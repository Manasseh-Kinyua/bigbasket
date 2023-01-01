import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingScreen() {
  return (
    <div>
      <h1>LandingScreen</h1>
      <Link style={{backgroundColor:'#FF4500'}} to='/products'><Button style={{backgroundColor:'#FF4500'}}>Start Shopping</Button></Link>
    </div>
  )
}

export default LandingScreen
