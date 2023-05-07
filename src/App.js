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



function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='about' element={<About />} />
      <Route exact path='client' element={<Client />} />
      {/* <Route exact path='owners' element={<Owners />} /> */}
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/welcome' element={<Welcome />} />
      <Route exact path='/allcars' element={<AllCars />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
