import React, { useState } from "react";
import "./accordion.css";

const Accordion = () => {
  const [active, setActive] = useState();

  const toggleAccordion = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  const Faq = [
      {
          id:1,
          title: "lorem obsumene ejkenln;ene",
          text: "woijowooro klmnlkanfnlanlf lenkrlrn",
      },
      {
        id:2,
        title: "lorem obsumene ejkenln;ene",
        text: "woijowooro klmnlkanfnlanlf lenkrlrn",
      }
  ]

  return (
    <div className="container">
      <div className="containerText">
        <h1>FAQ</h1>
      </div>
      {Faq.map((item, index) => {
        return (
          <div className="containerAccordion" key={item.id} >
            <div
              className={`head ${active === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
              key={index}
            >
              <p>{item.title}</p>
              <span>{active === index ? <p>-</p> : <p>+</p>}</span>
            </div>
            {active === index ? (
              <div className="text">
                <p>{item.text}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
