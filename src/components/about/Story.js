import React from 'react';
import './About.css'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Story() {
  return (
    <MDBCard style={{ maxWidth: '1400px', boxShadow: 'none' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://cdn.dribbble.com/users/443286/screenshots/1461355/media/9d4eff00ce98f602f0a6e25e85361b25.gif' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle id='heading'>What we do</MDBCardTitle>
            <MDBCardText>
            At Hireo, we understand how frustrating it can be to find a suitable
          rental car, especially when you're short on time. That's why we've
          created a platform that enables users to browse and reserve rental cars
          that are currently available, all in one convenient place.
            </MDBCardText>
            <MDBCardText>
              {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}