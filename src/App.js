import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import  Register  from './components/Register';
import Welcome from './components/welcome';
import Dashboard from './components/Dashboard';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Verify from './components/Verify';
import Student from './components/Student';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route path="/verify" element={<Verify />}></Route>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route path="/admin-dashboard" element={<Dashboard />}></Route>
      <Route path="/student-dashboard" element={<Student />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </>
  )
);
function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
    </div>
  );
}

export default App;
