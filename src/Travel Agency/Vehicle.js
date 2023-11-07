import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Vehicle = () => {

    const navigate = useNavigate()

const [preview , setPreview] = useState('')

    const initial = {
        vehiclenum: '',
        vehicletype: '',
        drivername: '',
        drivernum: '',
        from: '',
        to: '',
        image:'',
        time: '',
        seats:'',
        Ac:'2 Rupees/km',
        nonAc:'1.5 Rupees/km'
    }

    const validation = yup.object({
        vehiclenum: yup.string().required(),
        vehicletype: yup.string().required(),
        drivername: yup.string().required(),
        drivernum: yup.string().required(),
        from: yup.string().required(),
        image: yup.mixed().required(),
        to: yup.string().required(),
        time: yup.string().required(),
        seats: yup.string().required(),
    })


    const submit = (e)=>{
     
        const data ={
        vehiclenum : e.vehiclenum,
        vehicletype: e.vehicletype,
        drivername: e.drivername,
        drivernum:e.drivernum,
        from: e.from,
        image:preview,
        to: e.to,
        time: e.time,
        seats: e.seats,
        }

        axios.post('http://localhost:3002/vehicle' ,data)
        .then((res)=>{
            console.log(res.data)
    
            toast.success('Data Added Sucessfully !' ,{
                position:toast .POSITION.TOP_CENTER
            })

            console.log(data)
    
    
        })

        navigate('/vehiclelist')
    
    
    }


    const handleImageChange =(e)=>{

        const reader = new FileReader();
      reader.onload = () => {

    setPreview(reader.result)
     };
 reader.readAsDataURL(e.target.files[0]);
    }


    return (
        <>

            <Formik

                initialValues={initial}
                validationSchema={validation}
                onSubmit={(value, { resetForm }) => {

                    submit(value)

                    resetForm({ value: '' })

                }}
                

                
            >



                <Form>
                    <div className='d-flex justify-content-center align-items-center w-100vw vh-100'>

                        <div className='w-50 bg-white border shadow'>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-6'>

                                    <label htmlFor="">Vehicle Number:</label>
                                    <Field type='text' className='form-control' name='vehiclenum' />
                                    <ErrorMessage name='vehiclenum' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Vehicle Type</label>
                                    <Field as='select' name='vehicletype' className='form-control' options={"nameoption"} >
                                        <option value="" default >Select Vehicle</option>
                                        <option value="Ac">Ac</option>
                                        <option value="non-Ac">non-Ac</option>
                                    </Field>
                                    <ErrorMessage name='vehicletype' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Driver Name:</label>
                                    <Field type='text' className='form-control' name='drivername' />
                                    <ErrorMessage name='drivername' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Driver Number:</label>
                                    <Field type='number' className='form-control' name='drivernum' />
                                    <ErrorMessage name='drivernum' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">From:</label>
                                    <Field type='text' className='form-control' name='from' />
                                    <ErrorMessage name='from' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor=""> To:</label>
                                    <Field type='text' className='form-control' name='to' />
                                    <ErrorMessage name='to' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Timing:</label>
                                    <Field type='time' className='form-control' name='time' />
                                    <ErrorMessage name='time' render={msg => <div className='text-danger'>{msg}</div>} />

                                    <label htmlFor="">Image:</label>
                                    <Field type='file' className='form-control' name='image'  
                                    
                                    onChange ={handleImageChange}
                            
                                 
                                     accept="image/*" />
                                    <ErrorMessage name='image' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <img
                                    src={preview} 
                                    alt="Selected Image"
                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                       />

                                    <label htmlFor="">Seats:</label>
                                    <Field type='text' className='form-control' name='seats' />
                                    <ErrorMessage name='seats' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <button type='submit' className='btn btn-primary'>Submit</button>

                                </div>
                            </div>

                        </div>

                    </div>
                </Form>

            </Formik>

        </>
    )
}

export default Vehicle