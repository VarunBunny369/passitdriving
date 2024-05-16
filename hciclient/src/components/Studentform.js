import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import "../styles/StudentForm.css";
const Studentform = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/savestudent', formData)
      .then(response => {
        console.log('Student added successfully:', response.data);
        // Optionally, perform any actions after successful submission
      })
      .catch(error => {
        console.error('Error adding student:', error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">Add Student</button>
      </form>
    </div>
  );
}


export default Studentform;
