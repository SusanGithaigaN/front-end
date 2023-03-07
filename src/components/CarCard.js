import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

// React Bootstrap links
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import css
import './Car.css'

function CarCard(props) {
  const carObj = props.carddt
  return (
    <div className='client'>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col key={idx}>
        <Card className="custom-card">
          <Card.Img variant="top" src={carObj.image_url}/>
          <Card.Body>
            <Card.Title>Model: {carObj.model}</Card.Title>
            <Card.Title>In use since: {carObj.datetime}</Card.Title>
            <Card.Title>Speed limit: {carObj.speed}</Card.Title>
            <Card.Text>
              {/* <Link to={`/car/${carObj.uniq_id}`}><Button variant='outline-secondary' size='sm'>Book Car</Button>{' '}</Link> */}
              <Link to={`/car/${carObj.uniq_id}/users`}><Button variant='outline-secondary' size='sm'>Book Car</Button>{' '}</Link>

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>  
  </div>      
    

  );
}

export default CarCard