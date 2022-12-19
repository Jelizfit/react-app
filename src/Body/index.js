import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Map from './Map';
import TimeSelector from './TimeSelector';
import './body.scss'


function Body() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        <TimeSelector id="home"/>
        <Map />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <TimeSelector id="profile"/>
        <Map />
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
         <TimeSelector id="longer"/>
         <Map />
      </Tab>
    </Tabs>
  );
}

export default Body;