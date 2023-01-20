import Container from 'react-bootstrap/Container';
import Body from './Body';
import Header from './Header';
import ErrorModal from './ErrorModal'

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <ErrorModal />
    </Container>
  );
}

export default App;
