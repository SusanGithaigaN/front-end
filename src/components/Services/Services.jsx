import React from 'react';
import './Services.css'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import SectionA from './SectionA';
import FAQ from '../FAQ/FAQ';

export default function Services() {
  return (
    <>
    <h1>Services</h1>
    {/* Luxury */}
    <SectionA />
    <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://bit.ly/3WjSwJR' alt='...' fluid height='50px' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Economy car rental with a driver</MDBCardTitle>
            <MDBCardText>
            Having often heard the word economy, a person imagines an uncomfortable and old car.
             In fact, the economy class car got its name for its compact size. 
             Segment B cars are larger than city cars but smaller than the average C segment.
             Economy class cars have a length of 3.7 to 4.2 m, which allows the car to be maneuverable and fast enough on city and highways.
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://bit.ly/3WjSwJR' alt='...' fluid height='50px' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Luxury</MDBCardTitle>
            <MDBCardText>
            Having often heard the word economy, a person imagines an uncomfortable and old car.
             In fact, the economy class car got its name for its compact size. 
             Segment B cars are larger than city cars but smaller than the average C segment.
             Economy class cars have a length of 3.7 to 4.2 m, which allows the car to be maneuverable and fast enough on city and highways.
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://bit.ly/3WjSwJR' alt='...' fluid height='50px' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Luxury</MDBCardTitle>
            <MDBCardText>
            Having often heard the word economy, a person imagines an uncomfortable and old car.
             In fact, the economy class car got its name for its compact size. 
             Segment B cars are larger than city cars but smaller than the average C segment.
             Economy class cars have a length of 3.7 to 4.2 m, which allows the car to be maneuverable and fast enough on city and highways.
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://bit.ly/3WjSwJR' alt='...' fluid height='50px' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Luxury</MDBCardTitle>
            <MDBCardText>
            Having often heard the word economy, a person imagines an uncomfortable and old car.
             In fact, the economy class car got its name for its compact size. 
             Segment B cars are larger than city cars but smaller than the average C segment.
             Economy class cars have a length of 3.7 to 4.2 m, which allows the car to be maneuverable and fast enough on city and highways.
            </MDBCardText>
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <FAQ />
    </>
  );
}