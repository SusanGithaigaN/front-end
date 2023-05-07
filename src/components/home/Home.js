import NavBar from '../NavBar/NavBar';
import './Home.css'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <div>
    <NavBar />
        <div className='home'>
            <p className='para'>Hi there,</p> 
             <p className='para'>Welcome to Hireo</p>
                <p className='para'>- the platform that makes car rental easy and hassle-free!</p>
            <Button variant="dark" className='btn' href='/client'>Hire with Us</Button>
            
            </div>
    </div>
);
  
}
