import { radius, setSpace, setType } from "../../../utils";

const bubbleBase = `
  ${setSpace("pas")};
  ${setType("x")};};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 260px;
  &:not(:last-child),
  &:not(:first-child) {
    border-radius: ${radius.s};
    margin-bottom: 1px;
    margin-top: 1px;
  }
  & > p {
    ${setSpace("pan")};
    ${setSpace("man")};
  }
`;

export default bubbleBase;
