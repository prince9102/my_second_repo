import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
const VehicleList = () => {
    const [data, setData] = useState([])
    const [state, setState] = useState('')
    const [filteredData, setFilterdData] = useState([])

   

   

    useEffect(() => {
        axios.get('http://localhost:3002/vehicle')
            .then((res) => {
                setData(res.data)
                setFilterdData(res.data)

            })

    }, [state])

    const handleDelete = (id) => {

        if (window.confirm('Are you sure to delete data')) {

            axios.delete('http://localhost:3002/vehicle/' + id)
            setState(Math.random())
        }

    }

    const handleType = (e) => {

        let filteredDataArray = []

        if (e.target.value) {

            filteredDataArray = data.filter((item) => {
                return item.vehicletype.toLowerCase() === e.target.value.toLowerCase()
            })


        }
        setFilterdData(filteredDataArray)
    }

    return (

        <>
            <div className='row'>
                <div className='col-md-2'>
                    <select name="type" onChange={handleType} className='form-control' >
                        <option value="" default >Select Type</option>
                        <option value="Ac" >Ac</option>
                        <option value="non-Ac" >non-Ac</option>

                    </select>

                </div>
            </div>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>vehicle Number</th>
                        <th scope='col'>vehicle type</th>
                        <th scope='col'> Driver Name</th>
                        <th scope='col'>Driver Num</th>
                        <th scope='col'>From</th>
                        <th scope='col'>To </th>
                        <th scope='col'>Time </th>
                        <th scope='col'>Seats</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.vehiclenum}</td>
                            <td>{item.vehicletype}</td>
                            <td>{item.drivername}</td>
                            <td>{item.drivernum}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.time}</td>
                            <td>{item.seats}</td>

                            <td><Link to={`/update/${item.id}`} className='btn btn-info'>Update</Link></td>
                            <td><Link onClick={(e) => handleDelete(item.id)} className='btn btn-danger'>Delete</Link></td>

                        </tr>
                    })}
                </tbody>
            </table>

        </>
    )
}

export default VehicleList