import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBCardText,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Mission() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Our Mission
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            OurVision
            {/* <MDBCardText>
            At Hireo, we understand how frustrating it can be to find a suitable
          rental car, especially when you're short on time. That's why we've
          created a platform that enables users to browse and reserve rental cars
          that are currently available, all in one convenient place.
            </MDBCardText> */}
          </MDBTabsLink>
        </MDBTabsItem>
        {/* <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Tab 3
          </MDBTabsLink>
        </MDBTabsItem> */}
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
        {/* https://i.pinimg.com/originals/b9/48/ed/b948ed6a0b999277557a0efbf3925e97.jpg */}
        <MDBCard style={{ maxWidth: '1500px', boxShadow: 'none' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='data:image/png;base64,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' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Our mission</MDBCardTitle>
            <MDBCardText>
            At Hireo, we understand how frustrating it can be to find a suitable
          rental car, especially when you're short on time. That's why we've
          created a platform that enables users to browse and reserve rental cars
          that are currently available, all in one convenient place.
            </MDBCardText>
            <MDBCardText>
              {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
        <MDBCard style={{ maxWidth: '1500px', boxShadow: 'none' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4eBajcz1O_y-Ad8weeUTX3-_kkBLylCTCA&usqp=CAU' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Our Vision</MDBCardTitle>
            <MDBCardText>
            At Hireo, we understand how frustrating it can be to find a suitable
          rental car, especially when you're short on time. That's why we've
          created a platform that enables users to browse and reserve rental cars
          that are currently available, all in one convenient place.
            </MDBCardText>
            <MDBCardText>
              {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
        </MDBTabsPane>
        {/* <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane> */}
      </MDBTabsContent>
    </>
  );
}