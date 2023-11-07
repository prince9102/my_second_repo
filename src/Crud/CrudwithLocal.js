import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Crud = () => {
  const [search, setsearch] = useState('');
  const [country, setcountry] = useState('');

  const initial = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    country: '',
  };

  const validation = yup.object({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6, 'Password must be 6 characters'),
    address: yup.string().required(),
    country: yup.string().required(),
  });


  const saveFormDataToLocalStorage = (formData) => {
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(formData);
    localStorage.setItem('formData', JSON.stringify(existingData));
  };


  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('formData')) || []);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('formData')) || []);
  }, []);

  const submit = (values) => {

    saveFormDataToLocalStorage(values);

    
  };

  return (
    <>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          submit(values);
          resetForm({ values: '' });
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
<select name="country" onChange={(e)=>setcountry(e.target.value)} className='form-control' >
                        <option value="" default >Select country</option>
                        <option value="india" >India</option>
                        <option value="usa" >USA</option>

                    </select>

      </div>

      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {data
              .filter((item) => {
                if (
                  (search === '' ||
                    item.fname.toLowerCase().includes(search.toLowerCase()) ||
                    item.lname.toLowerCase().includes(search.toLowerCase())) &&
                  (country === '' || item.country.toLowerCase() === country.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Crud;
