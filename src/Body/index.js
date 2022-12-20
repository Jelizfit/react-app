import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Map from './Map';
import TimeSelector from './TimeSelector';
import './body.scss'
import SearchBar from './SearchBar';



function Body() {
  const [showBar, setShowBar] = useState(false);

  const handleCloseBar = () => setShowBar(false);
  const handleShowBar = () => setShowBar(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowBar}>
        Launch
      </Button>
      <SearchBar show={showBar} handleClose={handleCloseBar} />
      <Tabs
        defaultActiveKey="now"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <TimeSelector id="now" />
          <Map />
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          <TimeSelector id="forecast" />
          <Map />
        </Tab>
      </Tabs>
    </>
  );
}

export default Body;