import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Update = () => {

    const {id} = useParams()
    const [data , setData] = useState([])

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

    useEffect(()=>{


        axios.get('http://localhost:3002/vehicle/' +id )
        .then((res)=>{
setData(res.data)
            console.log(res.data)
            initial.vehiclenum = res.data.vehiclenum
            initial.vehicletype = res.data.vehicletype
            initial.drivername = res.data.drivername
            initial.drivernum = res.data.drivernum
            initial.from = res.data.from
            initial.to = res.data.to
            initial.time = res.data.time
            initial.seats = res.data.seats



        })

    },[])


    

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
     

        axios.put('http://localhost:3002/vehicle/' +id ,e)
        .then((res)=>{
            console.log(res.data)
    
            toast.success('Data Updated Sucessfully !' ,{
                position:toast .POSITION.TOP_CENTER
            })
    
    
        })
    
    
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
                                    <Field type='file' className='form-control' name='image' />
                                    <ErrorMessage name='image' render={msg => <div className='text-danger'>{msg}</div>} />


                                    <label htmlFor="">Seats:</label>
                                    <Field type='text' className='form-control' name='seats' />
                                    <ErrorMessage name='seats' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <button type='submit' className='btn btn-primary'>Update</button>

                                </div>
                            </div>

                        </div>

                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default Update