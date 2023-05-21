import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:9292/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.username) {
          navigate('/');
        }
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div id='login-page'>
    
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>
        <form onSubmit={handleSubmit}>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
            
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='username' id='formControlLg' type='username' size="lg" value={username} onChange={handleUsernameChange} />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlL' type='password' size="lg" value={password} onChange={handlePasswordChange} />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type='submit'>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="/usersignup" class="link-info">Register here</a></p>

          </div>
          </form>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    
    </div>
  );
}

export default Login;