import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../styles/DisplayStudents.css";
const DisplayStudents = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/getallstudents')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []); 



  return (
    <div>
      <h1>Students Data</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>contactNumber</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
  
}

export default DisplayStudents;