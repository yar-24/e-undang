import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { colors, mobile } from "../../../utils";

const Button = styled.div`
  position: fixed;
  right: 0;
  bottom: 20%;
  height: 10px;
  font-size: 3rem;
  margin: 40px;
  z-index: 3;
  opacity: 0.5;
  transition: 0.5s ease-in all;
  color: ${colors.btnPink};
  cursor: pointer;
  ${mobile({fontSize: "2rem", bottom: "10%"})}
`;

const ScrollBtnUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollBtnUp;
