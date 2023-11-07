import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

const Items = () => {
const [data , setData] = useState([])
const [prev, setPrev] = useState(0)
const [next, setNext] = useState(10)
  const [searchTerm, setSearchTerm] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const location = useLocation()
  const [prevLocation, setPrevLocation] = useState(location.pathname);


  useEffect(() => {

    axios.get("https://dummyjson.com/products")
    .then((res)=>{

       setData(res.data.products)
     
       console.log((res.data.products))
    })
  
}, [])



useEffect(() => {

 setPrevLocation(location.pathname)

}, [])

   useEffect(() => {

    if (location.pathname !== prevLocation) {
      handleSessionExpiration();
      setPrevLocation(location.pathname);
    }

    console.log(location.pathname )
  }, [location.pathname]);


  
 const handleSessionExpiration = () => {
    const existingToken = localStorage.getItem('token');
    if (existingToken !== token) {
      alert('Your session has expired. Create a new session.');
      generateToken(); 
    }
  };


  useEffect(() => {
    
    const existingToken = localStorage.getItem('token');
    if (!existingToken) {
      const newToken = Math.floor(Math.random()*10);
      localStorage.setItem('token', newToken);
      setToken(newToken);
    }

     else {
      setToken(existingToken);
    }
  }, []); 






 const generateToken = () => {
    const newToken = Math.floor(Math.random()*10)
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  



  return (
   <>
     <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='form-control'
        />
<table className='table table-bordered'>
    <thead>
        <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Product</th>
            <th scope='col'>About Product</th>
        </tr>
    </thead>
    <tbody>
        {data.filter((item)=>{
            if(searchTerm == '' || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return item
        })
        
        .slice(prev , next).map((item)=>{
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.thumbnail} alt={item.title} style={{height:'50px'}} />
                 <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Discount Price: ${item.discountprice}</p></td>
                <td><Link to={`/product/${item.id}`} className='btn btn-primary'>Details</Link></td>
            </tr>
        })}
    </tbody>
</table>

<button
                        onClick={() => {
                            if (prev != 0) {
                                setPrev(prev - 10);
                                setNext(next - 10)
                            }
                        }}
                        className='btn btn-outline-primary m-2'>Prev</button>

                    <button
                    
                        onClick={() => {
                            if(next< data.length){
                            setPrev(prev + 10);
                            setNext(next + 10)
                        }}}
                        className='btn btn-outline-primary m-3'>Next</button>

   </>
  )
}

export default Items























// useEffect(() => {


    
  //     setToken(Math.floor(Math.random()*10));
  //   localStorage.setItem('token', JSON.stringify(token));
    
  // }, [state]);


// useEffect(()=>{

//   handleSessionExpiration()

// },[location.pathname])

// const handleSessionExpiration = () => {
//     if (localStorage.getItem('token') !== token) {
//       alert('Your session has expired. Create a new session.');
//       generateToken()
//     }
//   };
