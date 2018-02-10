import { color, radius, setSpace } from "../../utils";

export const modals = `
  .ReactModalPortal {
  }
  .ReactModal__Overlay {
    align-items: center;
    background: rgba(247,247,247,0.5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
  }
  .ReactModal__Content {
    ${setSpace("pam")};
    background: ${color.white};
    border-radius: ${radius.h};
    box-shadow: 0 2px 4px ${color.greyLt};
    flex: 0 0 600px;
    max-height: 500px;
    min-height: 320px;
    overflow-y: auto;
    z-index: 10;
    &:focus {
      outline: none;
    }
  }
`;

export default modals;
