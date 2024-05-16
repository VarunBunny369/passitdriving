import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/DisplayStudents.css";
const DisplayInstructors = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/instructors')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []); 



  return (
    <div className="container">
    <h1>List of Instructors</h1>
    <table className='data-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>ContactNumber</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.contactNumber}</td>
            <td>{item.experience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);


    
}

export default DisplayInstructors;