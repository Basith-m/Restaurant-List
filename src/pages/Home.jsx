import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturants } from '../redux/resturantSlice'

function Home() {
    const { allResturants, loading, error} = useSelector((state)=>state.resturantSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchResturants())
    },[])
  return (
    <>
        {
            loading && 
            <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
               <p> Loading...</p>
            </div>
        }
        
        {
            !loading && error ?
            <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
               <p className='fw-bold text-warning'>{error}</p>
            </div> : null
        }

        <Row className='mt-5 mb-5 w-100'>
        {
            !loading && allResturants?.length>0 ? allResturants.map(resturant=>(
                <Col className='px-5 py-3' sm={12} md={6} lg={4} xl={3}>
                    <RestCard resturant={resturant} />
                </Col>
            ))
            : <p className='fw-bold text-warning text-center'>No Resturants are available</p>
        }    
        </Row>           
    </>
  )
}

export default Home