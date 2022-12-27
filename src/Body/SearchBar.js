import Offcanvas from 'react-bootstrap/Offcanvas';
import ExportDataForm from './ExportDataForm';
import SearchForm from './SearchForm';

function SearchBar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm />
        <ExportDataForm />
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SearchBar;