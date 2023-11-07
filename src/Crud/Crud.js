import React, { useEffect, useState } from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const Crud = () => {

    const [data , setdata] = useState([])
    const [search , setsearch] = useState('')
    const [country , setcountry] = useState('')


const initial = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    address:'',
    country:''
}

const validation = yup.object({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required().min(6 , 'password must be 6 character'),
    address:yup.string().required(),
    country:yup.string().required()
})


useEffect(()=>{

    axios.get('http://localhost:3002/signup')
    .then((res)=>{
        setdata(res.data)
        console.log(res.data)
    }
    )
} , [])


const submit =(values)=>{

    console.log(values)

    axios.post('http://localhost:3002/signup' , values )
    .then((res)=>{
        console.log(res.data)
    }
    )
    

    toast.success('Data Added Sucessfully !' ,{
        position:toast .POSITION.TOP_CENTER
    })

}



const handleDelete =(id)=>{

    if(window.confirm('Are you sure to delete')){
        
    axios.delete('http://localhost:3002/signup/'+id )
    .then((res)=>{
        console.log(res.data)
    }
    )

    toast.success('Data deleted Sucessfully !' ,{
        position:toast .POSITION.TOP_CENTER
    })
    }
    

  
    
}

  return (
   <>

   <Formik
   
   initialValues = {initial}
   validationSchema={validation}
   onSubmit={(values , {resetForm})=>{

    submit(values)
    resetForm({values:''})
   }}

   >

   <Form>
    <div className='container'>
        <div className='row'>
            <div className='col-md-5'>
                <label htmlFor="">First name:</label>
                <Field type='text' name='fname' className='form-control'/>
                <ErrorMessage name='fname' render={msg=> <div className='text-danger' >{msg}</div>}/>

                <label htmlFor="">Last name:</label>
                <Field type='text' name='lname' className='form-control'/>
                <ErrorMessage name='lname' render={msg=> <div className='text-danger' >{msg}</div>}/>

                <label htmlFor="">Email:</label>
                <Field type='text' name='email' className='form-control'/>
                <ErrorMessage name='email' render={msg=> <div className='text-danger' >{msg}</div>}/>

                <label htmlFor="">Password :</label>
                <Field type='text' name='password' className='form-control'/>
                <ErrorMessage name='password' render={msg=> <div className='text-danger' >{msg}</div>}/>

                <label htmlFor="">Address:</label>
                <Field type='text' name='address' className='form-control'/>
                <ErrorMessage name='address' render={msg=> <div className='text-danger' >{msg}</div>}/>

                <label htmlFor="">Country :</label>
                <Field as={'select'} name='country' className='form-control' options={'nameoption'}>
                    <option value="" default>Select country</option>
                    <option value="india" default>India</option>
                    <option value="Usa" default>USA</option>
                </Field>
                <ErrorMessage name='country' render={msg=> <div className='text-danger' >{msg}</div>}/>

                <button className='btn btn-primary m-2' type='submit'>Submit</button>
            </div>
        </div>
    </div>
   </Form>
   

   </Formik>

<div className='col-md-4'>
    <input type="text"  placeholder='search here' className='form-control' value={search} onChange={(e)=>setsearch(e.target.value)} />
<br />
<select name="type" onChange={(e)=>setcountry(e.target.value)} className='form-control' >
                        <option value="" default >Select country</option>
                        <option value="india" >India</option>
                        <option value="usa" >USA</option>

                    </select>
</div>

   <div>
    <table className='table table-borsered'>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>Country</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {data.filter((d)=>{
                if (
                (search === '' || d.fname.toLowerCase().includes(search.toLowerCase()) || d.lname.toLowerCase().includes(search.toLowerCase())) &&
                (country === '' ||  d.country.toLowerCase() === country.toLowerCase())
                 ){
                    return  d }

                   
                }
            ).map((item)=>{
                return <tr key={item.id}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                    <td><Link to={`/updatecrud/${item.id}`} className='btn btn-success'>Update</Link></td>
                    <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button></td>
                   
                    
                </tr>
            })}
        </tbody>
    </table>
   </div>

  
   </>
   
  )
}

export default Crud