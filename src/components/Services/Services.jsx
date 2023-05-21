import React from 'react';
import './Services.css'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import SectionA from './SectionA';
import FAQ from '../FAQ/FAQ';

export default function Services() {
  return (
    <>
      <h1>Hire now!</h1>
      {/* Luxury */}
      <SectionA />
      <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://bit.ly/3OpBWq4' alt='...' fluid height='50px' />
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
              <MDBCardText>
                <MDBBtn className='me-1' color='info' href='/hire'>
                  Hire
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>    <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://bit.ly/3Mnc8Iu' alt='...' fluid height='50px' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Compact cars</MDBCardTitle>
              <MDBCardText>
                Compact cars are a step up from economy cars in terms of size and comfort.
                They are still relatively
                affordable and are a good option for families or groups of friends.
              </MDBCardText>
              <MDBCardText>
                <MDBBtn className='me-1' color='info' href='/hire'>
                  Hire
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://bit.ly/45j7RhS' alt='...' fluid height='50px' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Luxury</MDBCardTitle>
              <MDBCardText>
                Luxury cars offer the ultimate in comfort and features,
                such as leather seats, heated seats, sunroofs, and premium sound systems.
              </MDBCardText>
              <MDBCardText>
                <MDBBtn className='me-1' color='info' href='/hire'>
                  Hire
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      {/* <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://bit.ly/3ItwQp3' alt='...' fluid height='50px' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Full-size cars</MDBCardTitle>
              <MDBCardText>
                They offer plenty of space for passengers and luggage,
                and they often come with features such as leather seats,
                heated seats, and sunroofs.
              </MDBCardText>
              <MDBCardText>
                <MDBBtn className='me-1' color='info' href='/hire'>
                  Hire
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <MDBCard style={{ maxWidth: '1400px', marginBottom: '4em' }} id='service'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src='https://bit.ly/45f8B7T' alt='...' fluid height='50px' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Midsize cars</MDBCardTitle>
              <MDBCardText>
                Midsize cars are larger and more comfortable than economy or compact cars.
                They offer more legroom and cargo space, making them a good choice for
                long trips or families with children.
              </MDBCardText>
              <MDBCardText>
                <MDBBtn className='me-1' color='info' href='/hire'>
                  Hire
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard> */}
      <h1>Frequently asked questions</h1>
      <FAQ />
    </>
  );
}