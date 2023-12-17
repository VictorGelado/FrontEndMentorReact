import styled from 'styled-components';
import { CommonFlex, Colors } from '../data/var';
import icon from '../assets/images/icon-star.svg';
import FaqComponent from './Faq';

const Div = styled.div`
  width: 90%;
  max-width: 602px;
  padding: 0 30px 45px 30px;
  border-radius: 9px;
  background-color: #ffffff;
  z-index: 999;
`;

const Header = styled.header`
  width: min-content;
  ${CommonFlex}
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 3.2em;
  font-weight: 700;
  color: ${Colors.darkPurple};

  @media (max-width: 480px) {
    font-size: 2.2em;
  }
`;

const Img = styled.img``;

function Card() {
  return (
    <Div>
      <Header>
        <Img src={icon}/>
        <Title>FAQs</Title>
      </Header>

      <FaqComponent/>
      
    </Div>
  );
}

export default Card;