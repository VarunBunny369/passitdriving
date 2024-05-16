import React from 'react'
import axios from 'axios';
import { useState } from 'react';





export const BookLesson = () => {

    const [lessonData, setLessonData] = useState({
        studentid: '',
        instructorid: '',
        startTime: '',
        endTime: '',
        lessonType: '',
        cost: 0.0,
        cancelled: false
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLessonData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/savelesson', lessonData)
          .then(response => {
            console.log('Lesson added successfully:', response.data);
            // Optionally, perform any actions after successful submission
          })
          .catch(error => {
            console.error('Error adding lesson:', error);
          });
      };
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
        <label className="form-label">
            Student ID:
            <input
                type="text"
                name="studentid"
                value={lessonData.studentid}
                onChange={handleInputChange}
                className="form-input"
            />
        </label>
        <label className="form-label">
            Instructor ID:
            <input
                type="text"
                name="instructorid"
                value={lessonData.instructorid}
                onChange={handleInputChange}
                className="form-input"
            />
        </label>
        <label className="form-label">
            Start Time:
            <input
                type="datetime-local"
                name="startTime"
                value={lessonData.startTime}
                onChange={handleInputChange}
                className="form-input"
            />
        </label>
        <label className="form-label">
            End Time:
            <input
                type="datetime-local"
                name="endTime"
                value={lessonData.endTime}
                onChange={handleInputChange}
                className="form-input"
            />
        </label>
        <label className="form-label">
            Lesson Type:
            <input
                type="text"
                name="lessonType"
                value={lessonData.lessonType}
                onChange={handleInputChange}
                className="form-input"
            />
        </label>
        <label className="form-label">
            Cost:
            <input
                type="number"
                name="cost"
                value={lessonData.cost}
                onChange={handleInputChange}
                className="form-input"
            />
        </label>
        <label className="form-label form-checkbox">
            Cancelled:
            <input
                type="checkbox"
                name="cancelled"
                checked={lessonData.cancelled}
                onChange={e => setLessonData(prevState => ({ ...prevState, cancelled: e.target.checked }))}
                className="form-input"
            />
        </label>
        <button type="submit" className="form-button">Add Lesson</button>
    </form>
</div>
  );
}
