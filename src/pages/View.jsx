import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
    const { allResturants, loading, error} = useSelector((state)=>state.resturantSlice)
    const [resturant,setResturant] = useState([])
    const {id} = useParams()
    // console.log(path);
    useEffect(()=>{
        allResturants?.fnd(item=>item.id === id)
    },[])

  return (
    <div>View</div>
  )
}

export default View