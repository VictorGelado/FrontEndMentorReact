import './App.css';
import Card from './components/Card';
import styled from 'styled-components';
import Colors from './data/var';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lightPink};
`;

function App() {
  return (
    <Container>
      <Card/>
    </Container>
  );
}

export default App;
