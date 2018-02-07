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

export const BodyText = css(Container)`
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
  & > * {
    max-height: 180px;
    overflow-y: auto;
    padding-bottom: 20px;
    ${breakpoint.tablet} {
      max-height: 200px;
    }
  }
`;

export const Foot = css.div`
  ${setSpace("phl")};
  ${setSpace("pbl")};
  color: ${color.white};
  text-align: center;
`;

export default class ViewerIntro extends React.Component {
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
          <BodyText>
            <PageText typo="h4">
              The Affordable CAre Act (ACA) is former Democratic President
              Barack Obama’s signature law. Generally known as “Obamacare” it’s
              divided US opinion. Supporters say it gives access to millions of
              uninsured citizens and keeps the healthcare industry in check,
              opponents argue many people now pay higher premiums and taxes go
              up. Who do you believe? US opinion. Supporters say it gives access
              to millions of uninsured citizens and keeps the healthcare
              industry in check, opponents argue many people now pay higher
              premiums and taxes go up. Who do you believe?
            </PageText>
          </BodyText>
        </Body>
        <Foot dir="column" flex={[1, 1, `${100 / 4}%`]}>
          <Container>
            <PageOutro typo="p6">
              The more people you interview the more information you gather. In
              the end you’ll get feedback on how well you’ve done.
            </PageOutro>
          </Container>
          <Actionbar>
            <Action fixed primary>
              Continue
            </Action>
          </Actionbar>
        </Foot>
      </Layout>
    );
  }
}
