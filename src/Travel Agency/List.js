import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const List = () => {

  const [data , setData] = useState([])
  const vachileData = JSON.parse(localStorage.getItem('vehicle')) || null
    
    useEffect(()=>{
        if(vachileData !== null){

          axios.get('http://localhost:3002/vehicle')
          .then((res)=>{
              setData(res.data)
              const info = res.data.filter((item)=>(
                  item.from  == vachileData.from  && item.to == vachileData.to
              ))
  
              setData(info)
          })
        }
        
    },[])




  return (
  <>

<Row>
 {data.map((item , index)=>{
    return <Col md={3}>
    <Card key={index}  style={{ width: '18rem', marginInline:10 }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.vehiclenum}</Card.Title>
        <Card.Text>
        Time : {item.time}

    <div>
    Distance : {Math.floor(Math.random()*400 )}
    </div>
        </Card.Text>
    
      </Card.Body>
    </Card>
    </Col>})}
    </Row>

  </>
  )
}

export default List