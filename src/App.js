import './App.css';
import './FaqContainerStyles.css';
import Card from './components/Card';
import styled from 'styled-components';
import { Colors } from './data/var';
import backgroundDesktop from './assets/images/background-pattern-desktop.svg'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.lightPink};
  position: relative;
  gap: 15px;  
`

const BackgroundImg = styled.img`
  min-width: 100%;
  position: absolute;
  top: 0;
`;

const Attribution = styled.p`
  font-size: 1.2rem;
  color: ${Colors.darkPurple};
  font-weight: 600;
`;

const A = styled.a`
  text-decoration: none;
  color: ${Colors.grayishPurple};

  &:hover {
    & {
      color: ${Colors.darkPurple};
      transition: color 0.20s ease-in;
    }
  }
`;

function App() {
  return (
    <Container>
      <BackgroundImg src={backgroundDesktop} alt="Background Image"/>

      <Card />

      <Attribution>
        Challenge by <A href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</A>. 
        Coded by <A href="https://github.com/VictorGelado/" target="_blank">Victor Gelado</A>.
      </Attribution>
    </Container>
  );
}

export default App;
