import './App.css';
import './FaqContainerStyles.css';
import Card from './components/Card';
import styled from 'styled-components';
import { Colors } from './data/var';
import backgroundDesktop from './assets/images/background-pattern-desktop.svg'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lightPink};
  position: relative;

  
`;/*background-image: url(${backgroundDesktop});
background-repeat: no-repeat;
bakcground-position: top;
bakcground-size: cover;*/

const BackgroundImg = styled.img`
  min-width: 100%;
  position: absolute;
  top: 0;
`;

function App() {
  return (
    <Container>
      <BackgroundImg src={backgroundDesktop} alt="Background Image"/>
      <Card />
    </Container>
  );
}

export default App;
