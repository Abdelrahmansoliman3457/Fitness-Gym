import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [isAnswerShoeing, setIsAnswerShoeing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShoeing(!isAnswerShoeing)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShoeing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShoeing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
