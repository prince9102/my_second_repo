import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const ProductData = () => {

    const [data , setData] = useState([])
    const location = useLocation()

    const {id} = useParams()

    useEffect(()=>{

        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            setData(res.data)
            
        })
console.log(location.pathname)
    },[location.pathname])


  return (
 <>


 <Card style={{ width: '18rem', marginInline:10 }}>
      <Card.Img variant="top" src={data.thumbnail}  alt={data.title}/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.price}
        </Card.Text>
    
      </Card.Body>
    </Card>
 </>
  )
}

export default ProductData









// Act as a resume builder who creates resume according to the job description 

// - I am looking for resume on front end developer 
// -  I have completed training in react js from jamtech private limited , lucknow 
// - Make sure you add some real time trouble shooting and usecases according to the job description in the resume 
// - please provide this resume in a proper resume format 

// wait for me to provide you a job description


