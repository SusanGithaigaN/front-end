import React from "react";
import "./About.css";
import Story from './Story'
import Mission from "./Mission";
// import { MDBBtn } from 'mdb-react-ui-kit';

export default function About() {
  return (
    <div id="about">
      <div id="mission">
        {/* <h1 id="heading">What we do</h1>
        <p>
          At Hireo, we understand how frustrating it can be to find a suitable
          rental car, especially when you're short on time. That's why we've
          created a platform that enables users to browse and reserve rental cars
          that are currently available, all in one convenient place.
        </p>
      </div>
      <div id="story"> */}
        <Story />
        <div id="statement">
        <Mission />
        </div>
      </div>
    </div>
  );
}
