import styled from 'styled-components';
import { Colors } from '../data/var';
import { CommonFlex } from '../data/var';
import icon from '../assets/images/icon-star.svg';

const Div = styled.div`
  height: 568px;
  width: 90%;
  max-width: 602px;
  padding: 0 40px;
  border-radius: 9px;
  background-color: #ffffff;
`;

const Header = styled.header`
  width: min-content;
  ${CommonFlex}
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 3.2em;
  color: ${Colors.darkPurple};
`;

const Img = styled.img``;


/*

  Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.

  Is Frontend Mentor free?

  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.

  Can I use Frontend Mentor projects in my portfolio?

  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!

  How can I get help if I'm stuck on a Frontend Mentor challenge?
  
  The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.

*/

function Card() {
  return (
    <Div>
      <Header>
        <Img src={icon}/>
        <Title>FAQs</Title>
      </Header>
      
    </Div>
  );
}

export default Card;