import React, { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
export default function AllCars() {
    const [allCars, setAllCars] = useState([]);

    useEffect(() =>{
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((data) => setAllCars(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Dashboard />
      <div>
      <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Model</th>
              <th scope="col">Speed</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          {allCars.map((car) => (
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{car.model}</td>
              <td>{car.speed}</td>
              <td>{car.datetime}</td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
