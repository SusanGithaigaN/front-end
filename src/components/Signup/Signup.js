import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        password: '',
        phonenumber: '',
        idnumber: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9292/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                navigate('/login');
            } else {
                alert('Error creating user');
            }
        } catch (error) {
            console.error('Error creating user', error);
            alert('Error creating user');
        }
    };

    return (
        <div id='signup-page'>
            <MDBContainer fluid className='p-4'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            The best offer <br />
                            <span className="text-primary">for your travel plans</span>
                        </h1>

                        <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>

                    </MDBCol>
                    
                    <MDBCol md='6'>

                        <MDBCard className='my-5'>
                        <form onSubmit={handleSubmit}>
                            <MDBCardBody className='p-5'>
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Full name' id='fullname' type='text' name='fullname' value={formData.fullname} onChange={handleChange} required />
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Username' type='text' id="username" name='username' value={formData.username} onChange={handleChange}/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' name="password" value={formData.password} onChange={handleChange}/>
                                <MDBRow>
                                    <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Phone Number' type='tel' id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange}/>
                                    </MDBCol>

                                    <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='ID Number' type='number' id="idnumber" name="idnumber" value={formData.idnumber} onChange={handleChange} onChange={handleChange}/>
                                    </MDBCol>
                                </MDBRow>

                                {/* <MDBInput wrapperClass='mb-4' label='Username' type='text' id="username" value={formData.username} onChange={handleChange}/> */}
                                <MDBInput wrapperClass='mb-4' label='Address' type='text' id="address" name="address" value={formData.address} onChange={handleChange}/>
                                {/* <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' name="password" value={formData.password} onChange={handleChange}/> */}

                                <div className='d-flex justify-content-center mb-4'>
                                    
                                </div>

                                <MDBBtn className='w-100 mb-4' size='md' type='submit'>sign up</MDBBtn>
                                  <p className='ms-5'>Already have an account? <a href="/userlogin" class="link-info">Login here</a></p>
                            </MDBCardBody>
                            </form>
                        </MDBCard>

                    </MDBCol>
                    

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default Signup;