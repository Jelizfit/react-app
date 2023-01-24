import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/weather-app">Weather</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;