import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Client from './components/client/Client';
import Home from './components/home/Home';
import NavBar from './components/NavBar/NavBar';

// import Projects from './components/projects/Projects';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route exact path='about' element={<About />} /> */}
      <Route exact path='client' element={<Client />} />
      {/* <Route exact path='contact' element={<Contact />} /> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
