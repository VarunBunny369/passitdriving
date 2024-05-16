import './App.css';
import DisplayInstructors from './components/DisplayInstructors';
import DisplayStudents from './components/DisplayStudents';
import Instructorform from './components/Instructorform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Studentform from './components/Studentform';
import Navigation from './components/Navigation';
import { BookLesson } from './components/BookLesson';

function App() {
  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route path="/" element={<h1>Welcome to Pass IT Driving School</h1>} />
        <Route path="/addstudent" element={<Studentform />} />
        <Route path="/students" element={<DisplayStudents />} />
        <Route path="/addinstructor" element={<Instructorform />} />
        <Route path="/instructors" element={<DisplayInstructors />} />
        <Route path="/booklesson" element={<BookLesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
