import React from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import {toast} from 'react-toastify'

const SignUp = () => {

const initial ={

    fname:'',
    lname:'',
    email:'',
    password:''

}

const validation = yup.object({

fname:yup.string().required(),
lname:yup.string().required(),
email:yup.string().email().required(),
password:yup.string().required()

})


const submit = (value) => {


    axios.post('http://localhost:3002/signup', value)
        .then((res) => {
            console.log(res.data)

            toast.success('Register Sucessfully !', {
                position: toast.POSITION.TOP_CENTER
            })


        })
    
}

  return (
   <>
   <Formik
   
   initialValues={initial}
   validationSchema={validation}
   onSubmit={(value , {resetForm})=>{

    submit(value)
    resetForm({value:''})
   }}
   >

   <div className='d-flex justify-content-center align-items-center w-100vw vh-100'>
    <div className='w-25 bg-light rounded shadow'>
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <h3 className='text-align-center'>SignUp Form</h3>
            <Form>
                <label htmlFor="">First Name :</label>
                <Field type='text'
                name='fname'
                className='form control' />
                <ErrorMessage name='fname' render={msg=> <div className='text-danger'>{msg}</div>}/>

                <label htmlFor="">Last Name :</label>
                <Field type='text'
                name='lname'
                className='form control' />
                <ErrorMessage name='lname' render={msg=> <div className='text-danger'>{msg}</div>}/>

                <label htmlFor=""> Email :</label>
                <Field type='email'
                name='email'
                className='form control' />
                <ErrorMessage name='email' render={msg=> <div className='text-danger'>{msg}</div>}/>

                <label htmlFor="">Passwrd :</label>
                <Field type='password'
                name='password'
                className='form control' />
                <ErrorMessage name='password' render={msg=> <div className='text-danger'>{msg}</div>}/>
                <button className='btn btn-primary m-3' type='submit'>Submit</button>
            </Form>
        </div>
        <div className='col-md-3'></div>
    </div>

    </div>
   </div>

   </Formik>

   </>
  )
}

export default SignUp