import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';



const UserPage = () => {

    const navigate = useNavigate()

const initial ={

    from:'',
    to:'',
    date:''
}

const validation =yup.object({
    from:yup.string().required(),
    to:yup.string().required(),
    date:yup.string().required(),
})

const submit = (value)=>{

    localStorage.setItem('vehicle' , JSON.stringify(value))

    navigate('/list')

}

  return (
 <>
 <Formik
 
initialValues={initial}
validationSchema={validation}
onSubmit={value=>{
    submit(value)
}}

 >

 <Form>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>

                <label htmlFor="">From :</label>
                <Field  type='text' name='from' className='form-control'  />

                
                <label htmlFor="">To :</label>
                <Field  type='text' name='to' className='form-control'  />

                
                <label htmlFor="">Date :</label>
                <Field  type='date' name='date' className='form-control'  />
                <button type='submit' className='btn btn-primary m-3'>Submit</button>
            </div>
        </div>
    </div>
 </Form>

 </Formik>

 </>
  )
}

export default UserPage