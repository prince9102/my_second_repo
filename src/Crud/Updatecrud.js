import React, { useState } from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Updatecrud = () => {
const {id} = useParams()
const navigate = useNavigate()
const [data , setdata] = useState([])

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

        axios.get('http://localhost:3002/signup/' +id)
        .then((res)=>{
            setdata(res.data)

            initial.fname = res.data.fname
            initial.lname = res.data.lname
            initial.email = res.data.email
            initial.password = res.data.password
            initial.address = res.data.address
            initial.country = res.data.country
         
            console.log(res.data)
        }
        )
    } , [])


    const submit =(values)=>{

        console.log(values)
    
        axios.put('http://localhost:3002/signup/' +id , values )
        .then((res)=>{
            console.log(res.data)
        }
        )
        
    
        toast.success('Data updated Sucessfully !' ,{
            position:toast .POSITION.TOP_CENTER
        })

        navigate('/crud')
    
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
   </>
  )
}

export default Updatecrud