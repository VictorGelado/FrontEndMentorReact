import React from "react";
import Faq from "react-faq-component";
import Faqs from "../data/questions";
import minus from '../assets/images/icon-minus.svg';
import plus from '../assets/images/icon-plus.svg';

const plusImg = <img src={plus} alt="Plus Icon"/>;
const minusImg = <img src={minus} alt="Minus Icon"/>;

const config = {
  animate: true,
  openOnload: 1,
  expandIcon: plusImg,
  collapseIcon: minusImg,
};

function FaqComponent() {
  return (
    <Faq
      data={Faqs}
      config={config}
    />
  );
}

export default FaqComponent;