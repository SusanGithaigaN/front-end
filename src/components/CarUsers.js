import React from 'react'

function CarUsers(props){
    const carUserObj = props.carUserObj
    return(
        <div className='userlisting mt-1 d-flex justify-content-start'>
        <img src="https://bit.ly/3IONQpi" alt="user" />
        <div className="user-details">
          <h4>Names: {carUserObj ? carUserObj.user.fullname : ''} </h4>
          <p>Contact no: {carUserObj ? carUserObj.user.phonenumber : ''}</p>
          <p>ID No: {carUserObj ? carUserObj.user.idnumber : ''}</p>
          <p>Address: {carUserObj ? carUserObj.user.address : ''}</p>
        </div>
      </div>
    )
}
export default CarUsers