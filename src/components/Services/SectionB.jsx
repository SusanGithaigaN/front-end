import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SectionB() {
  return (
    <MDBCard alignment='center' style={{maxWidth: '600px', marginBottom: '4em', marginTop: '4em'}}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Economy car rental with a driver</MDBCardTitle>
        <MDBCardText>
        Having often heard the word economy, a person imagines an uncomfortable and old car.
             In fact, the economy class car got its name for its compact size. 
             Segment B cars are larger than city cars but smaller than the average C segment.
             Economy class cars have a length of 3.7 to 4.2 m, which allows the car to be maneuverable and fast enough on city and highways.
        </MDBCardText>
        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
      </MDBCardBody>
      {/* <MDBCardFooter>2 days ago</MDBCardFooter> */}
    </MDBCard>
  );
}