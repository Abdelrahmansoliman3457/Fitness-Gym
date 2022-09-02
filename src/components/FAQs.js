import React from "react";
import SectionHead from "./SectionHead";
// import { FaQuestion } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ.js";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead title="FAQs" icon={<FaQuestion />} />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ question={question} answer={answer} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
