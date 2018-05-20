import styled from "styled-components";
import React from "react";
import ReactModal from "react-modal";
import { bool, func } from "prop-types";
import { Auth } from "aws-amplify";

import {
  Action,
  Actionbar,
  Form,
  FormItem,
  Label,
  LogoWSymbol,
  Modal,
  ModalBody,
  ModalHead,
  PageParagraph,
  PageTitle,
  PaneTab,
  PaneTabs,
  Preloader,
  Separator,
  TextInput,
  color,
  font,
  setHeight,
  setSpace
} from "interviewjs-styleguide";

const Brandmark = styled.div`
  line-height: 0;
  opacity: 0.8;
  padding: 1px;
  text-align: center;
  img {
    ${setHeight("l")};
  }
`;

const Message = styled(PageParagraph)`
  ${setSpace("mbl")};
  color: ${color.redM};
  font-family: ${font.serif};
  text-align: center;
`;

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "signIn",
      forgotPassword: false,
      lockForm: false,
      recoveryStep: 0,
      signupStep: 0,
      message: null,

      code: "",
      email: "",
      newPassword: "",
      password: "",
      username: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleConfirmSignUp = this.handleConfirmSignUp.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleConfirmForgotPassword = this.handleConfirmForgotPassword.bind(
      this
    );
    this.handleTabActivation = this.handleTabActivation.bind(this);
    this.toggleForgotPassword = this.toggleForgotPassword.bind(this);
  }

  async componentDidMount() {
    const info = await Auth.currentUserInfo();
    if (info) {
      this.props.handleAuthentication(info);
    }
  }

  toggleForgotPassword() {
    this.setState({ forgotPassword: true });
  }

  handleTabActivation(activeTab) {
    this.setState({ activeTab, forgotPassword: false });
  }

  handleInputChange({ target }) {
    this.clearMessage();
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  raiseError(error) {
    console.log(error);
    this.setState({ message: error.message });
  }

  raiseMessage(message, data) {
    this.setState({ message });
    if (data) console.log(data);
  }

  clearMessage() {
    this.setState({ message: "" });
  }

  handleSignIn(e) {
    if (e) e.preventDefault();
    const { username, password } = this.state;
    this.setState({ lockForm: true });

    Auth.signIn(username, password)
      .then(async (user) => {
        const info = await Auth.currentUserInfo();
        if (user && info) {
          this.raiseMessage("OK", info);
          this.props.handleAuthentication(info);
          this.setState({ lockForm: false });
        }
      })
      .catch((error) => {
        this.raiseError(error);
        this.setState({ lockForm: false });
      });
  }

  handleSignUp(e) {
    if (e) e.preventDefault();
    const { username, password, email } = this.state;
    this.setState({ lockForm: true });
    Auth.signUp({
      username,
      password,
      attributes: { email }
    })
      .then((data) => {
        this.raiseMessage("Check your email for access code", data);
        this.setState({ signupStep: 1, lockForm: false });
      })
      .catch((error) => {
        this.raiseError(error);
        this.setState({ lockForm: false });
      });
  }

  handleConfirmSignUp(e) {
    if (e) e.preventDefault();
    const { username, code } = this.state;

    Auth.confirmSignUp(username, code)
      .then((data) => {
        this.raiseMessage("Now please log in", data);
        this.setState({ activeTab: "signIn" });
      })
      .catch((error) => this.raiseError(error));
  }

  handleForgotPassword(e) {
    if (e) e.preventDefault();
    const { username } = this.state;
    this.setState({ lockForm: true });

    Auth.forgotPassword(username)
      .then((data) => {
        this.setState({ recoveryStep: 1, lockForm: false }, () =>
          this.raiseMessage("Check your email for access code", data)
        );
      })
      .catch((error) => {
        this.raiseError(error);
        this.setState({ lockForm: false });
      });
  }

  handleConfirmForgotPassword(e) {
    if (e) e.preventDefault();
    const { username, code, newPassword } = this.state;
    this.setState({ lockForm: true });

    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then((data) => {
        this.raiseMessage("Now please sign in", data);
        this.setState({ forgotPassword: false, lockForm: false });
      })
      .catch((error) => {
        this.raiseError(error);
        this.setState({ lockForm: false });
      });
  }

  render() {
    const renderSignIn = () => (
      <Form onSubmit={(e) => this.handleSignIn(e)}>
        <FormItem>
          <Label>Username</Label>
          <TextInput
            disabled={this.state.lockForm}
            input
            name="username"
            onChange={this.handleInputChange}
            type="text"
            value={this.state.username}
          />
        </FormItem>
        <Separator size="m" silent />
        <FormItem>
          <Label>Password</Label>
          <TextInput
            disabled={this.state.lockForm}
            input
            name="password"
            onChange={this.handleInputChange}
            type="password"
          />
        </FormItem>
        <Separator size="m" silent />
        <Actionbar>
          {this.state.lockForm ? (
            <Preloader />
          ) : (
            <Action
              disabled={this.state.lockForm}
              fixed
              onClick={this.handleSignIn}
              primary
            >
              Log in
            </Action>
          )}
        </Actionbar>
        <Separator silent size="x" />
        <Actionbar>
          <Action onClick={this.toggleForgotPassword}>Forgot password?</Action>
        </Actionbar>
      </Form>
    );
    const renderSignUp = () => {
      if (this.state.signupStep === 1) {
        return (
          <Form onSubmit={(e) => this.handleConfirmSignUp(e)}>
            <FormItem>
              <Label>Username</Label>
              <TextInput
                input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </FormItem>
            <Separator size="m" silent />
            <FormItem>
              <Label>Confirmation code</Label>
              <TextInput
                input
                type="text"
                name="code"
                value={this.state.code}
                onChange={this.handleInputChange}
              />
            </FormItem>
            <Separator size="m" silent />
            <Actionbar>
              <Action fixed primary onClick={this.handleConfirmSignUp}>
                Confirm sign up
              </Action>
            </Actionbar>
          </Form>
        );
      }
      return (
        <Form onSubmit={(e) => this.handleSignUp(e)}>
          <FormItem>
            <Label>Username</Label>
            <TextInput
              disabled={this.state.lockForm}
              input
              name="username"
              onChange={this.handleInputChange}
              type="text"
              value={this.state.username}
            />
          </FormItem>
          <Separator size="m" silent />
          <FormItem>
            <Label>Password</Label>
            <TextInput
              disabled={this.state.lockForm}
              input
              name="password"
              onChange={this.handleInputChange}
              type="password"
              value={this.state.password}
            />
          </FormItem>
          <Separator size="m" silent />
          <FormItem>
            <Label>Email</Label>
            <TextInput
              disabled={this.state.lockForm}
              input
              name="email"
              onChange={this.handleInputChange}
              type="email"
              value={this.state.email}
            />
          </FormItem>
          <Separator size="m" silent />
          <Actionbar>
            {this.state.lockForm ? (
              <Preloader />
            ) : (
              <Action fixed primary onClick={this.handleSignUp}>
                Sign up
              </Action>
            )}
          </Actionbar>
        </Form>
      );
    };
    const renderRecover = () => {
      if (this.state.recoveryStep === 1) {
        return (
          <Form onSubmit={(e) => this.handleConfirmForgotPassword(e)}>
            <FormItem>
              <Label>Username</Label>
              <TextInput
                disabled={this.state.lockForm}
                input
                name="username"
                onChange={this.handleInputChange}
                type="text"
                value={this.state.username}
              />
            </FormItem>
            <Separator size="m" silent />
            <FormItem>
              <Label>Confimation Code</Label>
              <TextInput
                input
                type="text"
                name="code"
                value={this.state.code}
                onChange={this.handleInputChange}
                disabled={this.state.lockForm}
              />
            </FormItem>
            <Separator size="m" silent />
            <FormItem>
              <Label>New password</Label>
              <TextInput
                input
                type="password"
                name="newPassword"
                value={this.state.newPassword}
                onChange={this.handleInputChange}
                disabled={this.state.lockForm}
              />
            </FormItem>
            <Separator size="m" silent />
            <Actionbar>
              {this.state.lockForm ? (
                <Preloader />
              ) : (
                <Action
                  fixed
                  primary
                  onClick={this.handleConfirmForgotPassword}
                >
                  Confirm new password
                </Action>
              )}
            </Actionbar>
          </Form>
        );
      }
      return (
        <Form onSubmit={(e) => this.handleForgotPassword(e)}>
          <Separator dir="h" size="s" silent />
          <FormItem>
            <Label>Username</Label>
            <TextInput
              input
              type="text"
              name="username"
              disabled={this.state.lockForm}
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </FormItem>
          <Separator size="m" silent />
          <Actionbar>
            {this.state.lockForm ? (
              <Preloader />
            ) : (
              <Action fixed primary onClick={this.handleForgotPassword}>
                Send me a recovery code
              </Action>
            )}
          </Actionbar>
        </Form>
      );
    };
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        overlayClassName="ReactModal__HeroOverlay"
        role="dialog"
      >
        <Modal {...this.props} persistent>
          <ModalHead fill="grey">
            <PageTitle typo="h2">
              <Brandmark>
                <img src={LogoWSymbol} alt="InterviewJS" />
              </Brandmark>
            </PageTitle>
            <Separator size="s" silent />
            <PaneTabs>
              <PaneTab
                opinionated
                active={this.state.activeTab === "signIn"}
                onClick={() => this.handleTabActivation("signIn")}
              >
                Log in
              </PaneTab>
              <PaneTab
                opinionated
                active={this.state.activeTab === "signUp"}
                onClick={() => this.handleTabActivation("signUp")}
              >
                Sign Up
              </PaneTab>
            </PaneTabs>
          </ModalHead>
          <Separator size="x" silent />
          <ModalBody>
            {this.state.message ? (
              <Message typo="p4">{this.state.message}</Message>
            ) : null}
            {!this.state.forgotPassword && this.state.activeTab === "signIn"
              ? renderSignIn()
              : null}
            {this.state.activeTab === "signUp" ? renderSignUp() : null}
            {this.state.forgotPassword && this.state.activeTab === "signIn"
              ? renderRecover()
              : null}
          </ModalBody>
        </Modal>
      </ReactModal>
    );
  }
}

AuthModal.propTypes = {
  handleAuthentication: func.isRequired,
  handleClose: func,
  isOpen: bool
};

AuthModal.defaultProps = {
  handleClose: null,
  isOpen: true
};

AuthModal.defaultProps = {};
