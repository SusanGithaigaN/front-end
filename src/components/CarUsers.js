import React from 'react'

function CarUsers(props){
    const carUserObj = props.carUserObj
    return(
        <div className='userlisting mt-1 d-flex justify-content-start'>
        <img src="https://bit.ly/3IONQpi" alt="user" />
        <div className="userinfo ps-3">
          <h4>{carUserObj ? carUserObj.user.fullname : ''} </h4>
          <p>{carUserObj ? carUserObj.user.phonenumber : ''}</p>
          <p>{carUserObj ? carUserObj.user.idnumber : ''}</p>
          <p>{carUserObj ? carUserObj.user.address : ''}</p>
        </div>
      </div>
    )
}
export default CarUsers