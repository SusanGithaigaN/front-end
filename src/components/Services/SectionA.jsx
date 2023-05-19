import React from 'react';
import './Section.css'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SectionA() {
  return (
    <MDBCard alignment='center' shadow='0' border='white' style={{ maxWidth: '900px', marginBottom: '4em' }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        {/* <MDBCardTitle>Economy car rental with a driver</MDBCardTitle> */}
        <MDBCardText>
          The choice of a car brand depends on the purpose of the rental.
          Depending on the brand, cars differ in body (sedan, hatchback), engine, transmission,
          number of doors and engine. For example, you can rent a subcompact car with a driver Skoda, Fiat, Chevrolet, Hyundai on Transfer Europe.
        </MDBCardText>
        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
      </MDBCardBody>
      {/* <MDBCardFooter>2 days ago</MDBCardFooter> */}
    </MDBCard>
  );
}