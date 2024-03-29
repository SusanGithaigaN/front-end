import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://web.facebook.com/githaiga.susan.77' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/Su_Githaiga' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a> */}
          <a href='https://instagram.com/githaiga_sn' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/susan-githaiga-2832b11aa/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/SusanGithaigaN' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Hireo
              </h6>
              <p>
                At Hireo, we understand how frustrating it can be to find a suitable rental car, especially when you're short on time.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                Economy car
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Luxury
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Compact cars
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Midsize cars
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hire
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 Kiambu, Kenya, KE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                 hireo@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />+ 254 0700 000 000
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />+ 254 0700 000 000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://www.linkedin.com/in/susan-githaiga-2832b11aa/'>
          Susan Githaiga
        </a>
      </div>
    </MDBFooter>
  );
}