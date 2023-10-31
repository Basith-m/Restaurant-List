import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchResturant } from '../redux/resturantSlice'

function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar expand="lg" className='p-2 mt-2'>
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}} className='d-flex justify-content-between align-items-center w-100'>
          <Navbar.Brand className='text-white fs-3 fw-bold'>
          <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder text-white'><i class="fa-solid fa-mug-hot me-3 fs"></i>Bro Cafes</Link>
          </Navbar.Brand>
          <div className='d-flex justify-content-center rounded align-items-center w-25'>
            <input onChange={(e)=>dispatch(searchResturant(e.target.value))} style={{outline:'none'}} className='form-contol p-2 rounded w-75' type="text" placeholder='Search Resturant' />
            <i style={{marginLeft:'-30px'}} className='fa-solid fa-search text-black'></i>
          </div>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header