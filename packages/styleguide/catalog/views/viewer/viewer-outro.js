import React from "react";
import css from "styled-components";

import { breakpoint, color, setSpace } from "../../../utils";

import {
  Action,
  Actionbar,
  Container,
  Separator,
  Text
} from "../../components";
import { Cover } from "../../partials";

import CoverImg from "../../static/cover.jpg";

const PageTitle = Text.withComponent("h1");
const PageSubtitle = css(Text.withComponent("h2"))`
  opacity: ${1 / 3 * 2};
`;
const PageText = css(Text.withComponent("p"))`
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
`;
const PageOutro = css(Text.withComponent("p"))`
  ${setSpace("mbm")};
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  opacity: ${1 / 3 * 2};
`;

export const Layout = css.div`
  background-color: ${color.black};
  display: flex;
  flex-direction: column;
`;

export const Body = css(Container)`
  ${setSpace("phl")};
  color: ${color.white};
  text-align: center;
`;

export const BodyWrapper = css(Container)`
  max-height: 200px;
  &:after {
    background: linear-gradient(rgba(0,0,0,0), ${color.black});
    bottom: -1px;
    content: " ";
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 100;
  }
  ${breakpoint.tablet} {
    max-height: 220px;
  }
`;
export const BodyText = css(Container)`
  max-height: 180px;
  overflow-y: auto;
  padding-bottom: 20px;
  ${breakpoint.tablet} {
    max-height: 200px;
  }
`;

export const Foot = css.div`
  ${setSpace("pbl")};
  ${setSpace("phl")};
  color: ${color.white};
  text-align: center;
`;

export default class ViewerOutro extends React.Component {
  constructor() {
    super();
    this.state = { pageHeight: null };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    /*
      don’t do this, this is just for documentation purpouse
      as responsive Catalog specimens are wrapped in iframes:
    */
    const windowHeight = document.getElementsByTagName("iframe")[0]
      .contentWindow.document.body.clientHeight; // see comment above
    return this.setState({
      pageHeight: windowHeight
    });
  }
  render() {
    return (
      <Layout
        {...this.props}
        pageHeight={this.state.pageHeight}
        style={{
          minHeight: this.state.pageHeight
        }}
      >
        <Cover image={CoverImg} flex={[0, 0, `${100 / 3}%`]} />
        <Body dir="column" flex={[2, 0, `${100 / 4}%`]}>
          <BodyWrapper>
            <BodyText>
              <PageText typo="h3">
                Wow, you are truly curious! You have spoken to everyone and
                collected 97% of the information. The world needs more people
                like you and we can’t wait to hear what you have to say!
              </PageText>
            </BodyText>
          </BodyWrapper>
        </Body>
        <Foot dir="column" flex={[1, 1, `${100 / 4}%`]}>
          <Actionbar>
            <Action fixed primary>
              Revisit the interviews
            </Action>
            <Action fixed primary>
              Have your say
            </Action>
          </Actionbar>
        </Foot>
      </Layout>
    );
  }
}
