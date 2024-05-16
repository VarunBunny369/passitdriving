import React, { useState } from 'react'
import axios from 'axios';
import "../styles/InstructorForm.css";
const Instructorform = () => {

    const [formData, setFormData] = useState({
        id:'',
        firstName: '',
        lastName: '',
        contactNumber: '',
        experience: ''
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
        // Post form data using Axios
        axios.post('http://localhost:8080/api/instructor', formData)
          .then(response => {
            console.log('Form submitted successfully:', response.data);
            // Reset form data after successful submission if needed
            setFormData({
                id:'',
                firstName: '',
                lastName: '',
                contactNumber: '',
                experience: ''
            });
          })
          .catch(error => {
            console.error('Error submitting form:', error);
          });
      };



  return (
    <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    ID:
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>
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
                    Phone:
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    Experience:
                    <input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </label>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
);
}

export default Instructorform;
