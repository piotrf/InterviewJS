import { setSpace, setType } from "../../../utils";

const bubbleBase = `
  ${setSpace("pvs")};
  ${setSpace("phm")};
  ${setType("x")};};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;
  min-height: 40px;
  &:not(:last-child),
  &:not(:first-child) {
    margin-bottom: 1px;
    margin-top: 1px;
  }
  & > p {
    ${setSpace("pan")};
    ${setSpace("man")};
  }
`;

export default bubbleBase;
