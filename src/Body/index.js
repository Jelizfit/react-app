import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import "./body.scss"
import SearchBar from "./SearchBar";
import Forecast from "./Tabs/Forecast";
import Now from "./Tabs/Now";
import { useDispatch } from 'react-redux';
import { setShowSearchBar } from '../services/stateService'


function Body() {

  const dispatch = useDispatch();

  const handleShowBar = () => dispatch(setShowSearchBar(true));

  return (
    <>
      <Button className="mb-4" variant="primary" onClick={handleShowBar}>
        Search
      </Button>
      <SearchBar/>
      <Tabs
        defaultActiveKey="now"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <Now/>
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          <Forecast />
        </Tab>
      </Tabs>
    </>
  );
}

export default Body;