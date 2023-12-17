import styled from 'styled-components';
import { Colors } from '../data/var';

//- Weights: 400, 600, 700

const Title = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: 600;
    color: ${Colors.darkPurple};

    &:hover {
        & {
            color: hsl(313, 66%, 59%);
            transition: color 0.20s ease-in;
        }
    }
`;

const Content = styled.p`
    margin: 15px 0;
    font-weight: 400;
    color: ${Colors.grayishPurple};
    line-height: 1.6;
    padding: 0 0 10px 0;
`;

const Faqs = {
    title: "",
    rows: [
        {
            title: <Title>What is Frontend Mentor, and how will it help me?</Title>,
            content: <Content>Frontend Mentor offers realistic coding challenges to help developers improve their 
            frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
            all levels and ideal for portfolio building.</Content>,
        },
        {
            title: <Title>Is Frontend Mentor free?</Title>,
            content: <Content>Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
            option providing access to a range of projects suitable for all skill levels.</Content>,
        },
        {
            title: <Title>How can I get help if I'm stuck on a Frontend Mentor challenge?</Title>,
            content: <Content>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!</Content>,
        },
        {
            title: <Title>How can I get help if I'm stuck on a Frontend Mentor challenge?</Title>,
            content: <Content>The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members.</Content>,
        },
    ],
};

export default Faqs;
