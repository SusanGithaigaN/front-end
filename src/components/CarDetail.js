import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import CarUsers from './CarUsers';

function CarDetail(){
    const { id } = useParams()
    const [carObject, setCarObject] = useState()
    const [carUserObject, setCarUserObject] = useState([])

    useEffect(() => {
      const baseUrl = `http://localhost:9292/`
      const usersUrl = `http://localhost:9292/car/${id}/users`
    
      const fetchData = async () => {
        try {
          const data = await fetch(baseUrl + id)
          const json = await data.json()
          setCarObject(json)
        } catch (error) {
          console.error(error)
        }
      }
    
      const fetchUsersData = async () => {
        try {
          const data = await fetch(usersUrl)
          const json = await data.json()
          setCarUserObject(json)
        } catch (error) {
          console.error(error)
        }
      }       
    
      fetchData()
      fetchUsersData()
    }, [id])

      const carUsers = carUserObject.map(item => {
        return <CarUsers key={item.id} carUserDt={item} />
      })      

    return(
        <Container className='p-3'>
        ID: {carObject ? carObject.uniq_id : '00000000'}
        <div className='car_images'>
          <img src={carObject ? carObject.image_url : "https://bit.ly/41xcS4L"} alt="test" width={600} />
        </div>
        <div>
          <h3 className="mt-3">{carObject ? carObject.model : "Loading..."}</h3>
          <Link to={`/car/hire/${carObject ? carObject.uniq_id : 0}`}>
          <Button variant='outline-secondary' size='sm'>Book Car</Button>{' '}</Link>
          <div className='d-flex justify-content-left align-items-left flex-column bmt-4 mb-4 mt-3'>
          <span><b>Date and Time :</b> {carObject ? carObject.datetime : "To be Set"}</span>
            <span className="mt-1"><b>Speed :</b> - {carObject ? carObject.speed : "To be Communicated"} </span>
          </div>
          <h4><u>Description</u></h4>
          <p>{carObject ? carObject.description : "loading..."}</p>
        </div> 
        <div className='mt-2 mb-2'>
          <h3><u>Recent clients</u></h3>
          <div className="partUsers">
            { carUsers }
          </div>
        </div>
      </Container>
    )
          
}

export default CarDetail