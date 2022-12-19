import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Map from './Map';
import TimeSelector from './TimeSelector';
import './body.scss'


function Body() {
  return (
    <Tabs
      defaultActiveKey="now"
      id="fill-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="now" title="Now">
        <TimeSelector id="now"/>
        <Map />
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
        <TimeSelector id="forecast"/>
        <Map />
      </Tab>
    </Tabs>
  );
}

export default Body;