import { css } from "styled-components";

export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 667px) {
        ${props}
      }
    `;
}

export const ipon = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `
}