import './Home.css'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <div>
        <div className='home'>
            <p className='para'>Hi there,</p> 
             <p className='para'>Welcome to Hireo</p>
                <p className='para'>Lorem ipsum</p>
            <Button variant="dark" className='para' href='/client'>Hire with Us</Button>
            </div>
    </div>
);
  
}
