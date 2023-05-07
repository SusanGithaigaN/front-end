// import css
import NavBar from "../NavBar/NavBar";
import "./Client.css";
import React, { useState, useEffect } from "react";

export default function Client() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div className="client">
        <p className="para2">Pick a car</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {cars.map((car) => (
            <div class="col" key={car.id}>
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src={car.image_url}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Car Model: {car.model}</h5>
                  <p class="card-text">Speed: {car.speed}</p>
                  {/* <button type="button" class="btn btn-secondary">Hire</button> */}
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#staticBackdrop`}
                  >
                    Hire
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">
                            Modal title
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    <small class="text-muted">Date: {car.datetime}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
