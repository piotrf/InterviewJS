import { color, radius, setSpace } from "../../utils";

export const modals = `
  .ReactModalPortal {
  }
  .ReactModal__Overlay {
    align-items: center;
    background: rgba(228,225,236,0.3);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index:a 5;
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
    &:focus {
      outline: none;
    }
  }
`;

export default modals;
