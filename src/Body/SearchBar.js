import Offcanvas from 'react-bootstrap/Offcanvas';
import ExportDataForm from './ExportDataForm';
import SearchForm from './SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSearchBar } from '../services/stateService'

function SearchBar() {
  // useSelector - это реакт-редукс хук для слушания состояния редукс.
  // При изменении состояния useSelector запускает render компонент(т.е.отрисовку).

const showSearchBar = useSelector((state) => state.showSearchBar);
// useDispatch - это реакт-редукс хук для триггера изменения состояния.
// useDispatch сначала нужно инициализировать, а потом использовать. 
// useDispatch возвращает функцию диспатчер. 
const dispatch = useDispatch();

//диспатчеру мы передаем Аction c новыми данными.
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