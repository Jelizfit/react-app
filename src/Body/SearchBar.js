import Offcanvas from 'react-bootstrap/Offcanvas';
import ExportDataForm from './ExportDataForm';
import SearchForm from './SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSearchBar } from '../services/stateService'

function SearchBar() {
const showSearchBar = useSelector((state) => state.showSearchBar);

const dispatch = useDispatch();

const handleClose = () =>  dispatch(setShowSearchBar(false));

  return (
    <Offcanvas show={showSearchBar} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm handleCloseBar={handleClose}/>
        <ExportDataForm />
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SearchBar;