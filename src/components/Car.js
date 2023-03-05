// http://0.0.0.0:9292/
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CarCard from "./CarCard"

function Car(){
    const base_url = "http://localhost:9292/"
  
    const [ carList, setCarList ] = useState([]);
  
    useEffect(() =>{
      const fetchData = async () => {
        const data = await fetch(base_url)
        const json = await data.json()
        setCarList(json)
      }
  
      fetchData().catch(console.error)
      
    }, [])
  
    const cars = carList.map(item => {
      return <CarCard key={item.id} carddt={item} />
    })
  
    return (
      <Container>
        <div className="row mt-5 mb-5">
          {cars}
        </div>
      </Container>
    )
  
  }
  
  export default Car