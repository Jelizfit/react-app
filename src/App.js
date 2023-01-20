import Container from 'react-bootstrap/Container';
import Body from './Body';
import Header from './Header';
import ErrorModal from './ErrorModal'

// компонент в react - это функция которая возвращает react элемент используя JSX.
// JSX - это новый синтаксис от react, который позволяет писать html и js удобнее.
// Компонент должен возвращать только один react элемент.
// Все названия компонентов в реакт всегда должны начинаться с Заглавной буквы
// Для того чтобы различать html от компонентов


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
