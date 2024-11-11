import React from 'react'
import { Container , Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
    <Navbar className="bg-warning">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="#home">
            
            <i className="fa-solid fa-play fa-fade" style={{color: "black"}}></i>{' '}{' '}
            Media-Player
          </Navbar.Brand>
          </Link>
        </Container>

      </Navbar>  
    </>
  )
}

export default Header
