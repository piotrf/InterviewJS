import css from "styled-components";

const Bubbles = css.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  ${({ persona }) =>
    persona === "user"
      ? `
    align-items: flex-end;
  `
      : `
    align-items: flex-start;
  `}
`;

export default Bubbles;
