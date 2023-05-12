// import css
// import NavBar from "../NavBar/NavBar";
import "./Client.css";
import React, { useState, useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from 'axios';


export default function Client() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

    const handleBasicClick = (car) => {
      setSelectedCar(car);
    }

    // loan car
    // set car details
    const[car_id, setCarId] = useState('');
    const[user_id, setUserId] = useState('');
    const[phonenumber, setPhonenumber] = useState('');
    const[loan_date, setLoanDate] = useState('');
    const[return_date, setReturnDate] = useState('');
    const[payment, setPayment] = useState('');
    // create a submit function
    const handleSubmit= (e) => {
      e.preventDEfault();
      const carDetails = { car_id, user_id, phonenumber, loan_date, return_date, payment}
    
  //   create a POST request
    fetch('http://localhost:9292/car/hire/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carDetails)
    }).then((res) =>{
      alert("Successfully Created")
      return res.json()
    }).then((car)=> console.log(car))
  }
  const item = {
    name: "Item Name",
    id: 123,
  };

  // axios.post('http://localhost:9292/car/hire/', item)
  // .then(res => {
  //    alert("Successfully Created")
  //     return res.json()
  // }).catch(err =>{
  //   console.log(err)
  // });

  // format user data date inputs
  // function formatDate(input) {

  //   if (!input) return "";
  //   const parts = input.split('/');
  //   const day = parts[0];
  //   const month = parts[1];
  //   const year = parts[2];
  //   return `${day}/${month}/${year}`;
  // }
 
  return (
    <>
      {/* <NavBar /> */}
      <div className="client">
        <p className="para2">Pick a car</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {cars.map((car) => (
            <div class="col" key={car.id}>
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src={car.image_url}
                  style={{width: 'auto', height: '230px'}}
                  alt="Loading..."
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
                    data-bs-target={`#staticBackdrop-${car.id}`}
                    onClick={() => setSelectedCar(car)}
                  >
                    Hire
                  </button>
                  {/* <!-- Modal --> */}
                  {selectedCar &&(
                  <div
                    class="modal fade"
                    id={`staticBackdrop-${selectedCar.id}`}
                    data-bs-backdrop="static"
                    // data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">
                            Hire a car <MDBIcon fab icon="hire-a-helper" style={{color: 'blue'}}/>
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="event-name" className="form-label">Car name/Model: </label>
                            <input type="text" className="form-control" id="event-name" value={selectedCar.model} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="event-description" className="form-label">Speed: </label>
                            <textarea className="form-control" id="event-description" rows="3" value={selectedCar.speed}></textarea>
                          </div>
                          {/* <div className="mb-3">
                            <label htmlFor="event-date" className="form-label">Date: </label>
                            <input type="date" className="form-control" id="event-date" value={formatDate(selectedCar.datetime)} />
                          </div> */}
                          {/* loan car Params */}
                          <div className="mb-3">
                            <label htmlFor="event-date" className="form-label">Pickup Date: </label>
                            {/* <input type="date" className="form-control" id="event-date" value={loan_date ? formatDate(loan_date) : ''} onChange={(e) => setLoanDate(e.target.value)} /> */}
                            <input type="date" className="form-control" id="event-date" value={loan_date}  onChange={(e) => setLoanDate(e.target.value)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="event-date" className="form-label">Return Date: </label>
                            <input type="date" className="form-control" id="event-date" value={return_date} onChange={(e) => setReturnDate(e.target.value)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="event-date" className="form-label">Payment Status: </label>
                            <input type="text" className="form-control" id="event-date" value={payment} onChange={(e) => setPayment(e.target.value)}/>
                          </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" class="btn btn-primary">
                            Hire
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}
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
