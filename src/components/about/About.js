import React from "react";
import "./About.css";
import Story from './Story'
import Mission from "./Mission";
// import { MDBBtn } from 'mdb-react-ui-kit';

export default function About() {
  return (
    <div id="about">
      <div id="mission">
        <Story />
        <div id="statement">
        <Mission />
        </div>
      </div>
    </div>
  );
}
