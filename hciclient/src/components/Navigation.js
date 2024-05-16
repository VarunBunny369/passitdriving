import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/navigation.css";
const Navigation = () => {
  return (
    <div className="nav-container">
      <Link to="/addstudent" className="nav-button">Add Student</Link>
      <Link to="/addinstructor" className="nav-button">Add Instructor</Link>
      <Link to="/students" className="nav-button">Display Students</Link>
      <Link to="/instructors" className="nav-button">Display Instructors</Link>
      <Link to="/booklesson" className="nav-button">Book Lesson</Link>

    </div>
  )
}

export default Navigation;
