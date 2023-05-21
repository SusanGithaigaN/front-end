import React from 'react';
// import { AuthProvider } from 'react-auth-kit'
// import RouteComponent from './routes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Client from './components/client/Client';
import Home from './components/home/Home';
// import NavBar from './components/NavBar/NavBar';
import About from './components/about/About';
// import Owners from './components/owners/Owner'
import Dashboard from './components/Admin/Dashboard';
import Welcome from './components/Admin/Welcome';
import AllCars from './components/Admin/AllCars';
import AdminLogin from './components/Admin/AdminLogin';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Signup from './components/Signup/Signup';
import Hire from './components/client/Hire';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='about' element={<About />} />
      <Route exact path='client' element={<Client />} />
      {/* <Route exact path='owners' element={<Owners />} /> */}
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/welcome' element={<Welcome />} />
      <Route exact path='/allcars' element={<AllCars />} />
      <Route exact path='/services' element={<Services />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/usersignup' element={<Signup />} />
      <Route exact path='/hire' element={<Hire />} />
      <Route exact path='/adminlogin' element={<AdminLogin />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

