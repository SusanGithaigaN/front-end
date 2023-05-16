import React from 'react';
import About from '../about/About';
// import Hire from '../client/Hire';

export default function Home() {
  return (
    
    <div>
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://bit.ly/3LWqnDX')", height: 700 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Hireo</h1>
              {/* <h4 className='mb-3'>Subheading</h4> */}
              <a className='btn btn-outline-light btn-lg' href='#about-page' role='button'>
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id='about-page'>
    <About />
    </div>
    {/* <div id='hire'>
      <Hire />
    </div> */}
</div>
  );
}