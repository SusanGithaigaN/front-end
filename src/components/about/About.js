import React from 'react';
// import css
import './About.css'
export default function About() {
  return (
    <div id='abt'>
        <div className='img'>
            <img src='https://bit.ly/3kKHTl0' alt='img' width={450} height={450} />
          <div className='text'>
              <h1>Mission statement</h1>
              <br />
               <p>
               At Hireo, we understand how frustrating it can be to find a suitable rental car,
                especially when you're short on time. 
                That's why we've created a platform that enables users to browse 
                and reserve rental cars that are currently available, 
               all in one convenient place.
              </p>
          </div>
        </div>
    </div>
  )
}
