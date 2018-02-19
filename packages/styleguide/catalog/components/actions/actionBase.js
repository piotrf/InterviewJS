import { color, radius, setSpace, setType, time } from "../../../utils";

const actionBase = {
  graphic: `
    ${setSpace("phs")};
    ${setType("x")};
    align-content: center;
    align-items: center;
    border-color: transparent;
    border-radius: ${radius.a};
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 2px 4px ${color.shadowLt};
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.2em;
    max-width: 160px;
    outline: none;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    transition:
      background-color ${time.m},
      border-color ${time.m},
      box-shadow ${time.m},
      color ${time.m},
      opacity ${time.m},
      transform ${time.m}
    ;
    & > i {
      &:not(:only-child) {
        ${setSpace("mrx")};
      }
    }
    &:active {
      box-shadow: 0 1px 2px ${color.shadowHL};
      transform: translateY(1px);
    }
  `,
  textual: `
    ${setType("x")};
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    line-height: 1.2em;
    outline: none;
    padding: 0;
    text-decoration: none;
    transition:
      color ${time.m},
      opacity ${time.m},
      transform ${time.m}
    ;
    &:active {
      transform: translateY(1px);
    }
  `
};

export default actionBase;
