import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestCard({resturant}) {
  return (
    <Link to={`/view/${resturant?.id}`} style={{textDecoration:'none'}}>
      <Card style={{height:'430px'}}>
        <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src={resturant?.photograph} />
        <Card.Body>
          <Card.Title>{resturant?.name}</Card.Title>
          <Card.Text>
            <p>Cusine : {resturant?.cusine_type}</p>
            <p>{resturant?.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RestCard