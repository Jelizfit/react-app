import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import './body.scss'
import SearchBar from './SearchBar';
import Forecast from './Tabs/Forecast';
import Now from './Tabs/Now';




function Body() {
  const [showBar, setShowBar] = useState(false);

  const handleCloseBar = () => setShowBar(false);
  const handleShowBar = () => setShowBar(true);


  return (
    <>
      <Button className="mb-4" variant="primary" onClick={handleShowBar}>
        Search
      </Button>
      <SearchBar show={showBar} handleClose={handleCloseBar} />
      <Tabs
        defaultActiveKey="now"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <Now  />
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          <Forecast /> 
        </Tab>
      </Tabs>
    </>
  );
}

export default Body;