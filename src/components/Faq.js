import styled from 'styled-components';
import { Colors } from '../data/var';
import { CommonFlex } from '../data/var';
import minus from '../assets/images/icon-minus.svg';
import plus from '../assets/images/icon-plus.svg';

const Img = styled.img``;
  
const FaqContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`; 

const Ask = styled.div`
  width: 100%;
  ${CommonFlex}
`; 

const ParagraphQuestion = styled.p`

`;

function Faq() {
  return (
    <FaqContainer>
        <Ask>
          <ParagraphQuestion>What is Frontend Mentor, and how will it help me?</ParagraphQuestion>
          <Img src={minus}/>
        </Ask>
    </FaqContainer>
  );
}

export default Faq;