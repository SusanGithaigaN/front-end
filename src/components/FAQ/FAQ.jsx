import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
// import '../Services/Services.css'
export default function FAQ() {

  return (
    <div style={{ marginTop: '4em', marginBottom: '4em' }} id='faq'>
      {/* <h1>Frequently asked questions</h1> */}
      <MDBAccordion initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle='What are the rental rates?'>
          The rental rates will vary depending on the type of car you choose,
          the dates and times you rent, and the location where you pick up
          and drop off the car. You can get an estimate of the rental rates
          by visiting our website or calling our customer service line.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle='What are the age requirements for renting a car?'>
          The age requirements for renting a car will vary depending
          on the rental company. However, most rental companies require
          that you be at least 25 years old to rent a car.
          Some rental companies may also have age restrictions for certain types of
          cars, such as sports cars or luxury cars.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle='What types of cars are available?'>
          We offer a wide variety of cars to choose from,
          including economy cars, compact cars, midsize cars,
          full-size cars, luxury cars, SUVs, minivans, and trucks.
          We also offer a variety of specialty cars, such as sports cars and convertibles.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle='What are the cancellation policies?'>
          The cancellation policies will vary depending on the rental company.
          However, most rental companies will allow you to cancel your
          reservation without penalty if you cancel at least 24 hours in advance.
          If you cancel your reservation within 24 hours of your rental date,
          you may be charged a cancellation fee.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle='What are the additional fees?'>
          In addition to the rental rate, there may be additional fees associated with renting a car. These fees may include:
          <li>Fuel surcharge</li>
          <li>Loss damage waiver (LDW) fee</li>
          <li>Theft protection fee</li>
        </MDBAccordionItem>
      </MDBAccordion>
    </div>
  );
}