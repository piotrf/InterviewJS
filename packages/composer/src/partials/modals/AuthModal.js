import css from "styled-components";
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
  Preloader,
  PaneTab,
  PaneTabs,
  PageTitle,
  Separator,
  Text,
  TextInput,
  setHeight
} from "interviewjs-styleguide";

const Brandmark = css.div`
  line-height: 0;
  opacity: .8;
  padding: 1px;
  text-align: center;
  img {
    ${setHeight("l")};
  }
`;

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "signIn",
      code: "",
      email: "",
      forgotPassword: false,
      message: null,
      newPassword: "",
      password: "",
      signInActivated: false,
      signupStep: 0,
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
    this.setState({ signInActivated: true });

    Auth.signIn(username, password)
      .then(async (user) => {
        const info = await Auth.currentUserInfo();
        if (user && info) {
          this.raiseMessage("OK", info);
          this.props.handleAuthentication(info);
        }
      })
      .catch((error) => {
        this.raiseError(error);
        this.setState({ signInActivated: false });
      });
  }

  handleSignUp(e) {
    if (e) e.preventDefault();
    const { username, password, email } = this.state;
    Auth.signUp({
      username,
      password,
      attributes: { email }
    })
      .then((data) => {
        this.raiseMessage("Check your email for access code", data);
        this.setState({ signupStep: 1 });
      })
      .catch((error) => this.raiseError(error));
  }

  handleConfirmSignUp(e) {
    if (e) e.preventDefault();
    const { username, code } = this.state;

    Auth.confirmSignUp(username, code)
      .then((data) => this.raiseMessage("Now please sign in", data))
      .catch((error) => this.raiseError(error));
  }

  handleForgotPassword(e) {
    const { username } = this.state;

    Auth.forgotPassword(username)
      .then((data) =>
        this.raiseMessage("Check your email for access code", data)
      )
      .catch((error) => this.raiseError(error));
  }

  handleConfirmForgotPassword(e) {
    const { username, code, newPassword } = this.state;

    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then((data) => this.raiseMessage("Now please sign in", data))
      .catch((error) => this.raiseError(error));
  }

  render() {
    const renderSignIn = () => (
      <Form onSubmit={(e) => this.handleSignIn(e)}>
        <FormItem>
          <Label>Username</Label>
          <TextInput
            disabled={this.state.signInActivated}
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
            disabled={this.state.signInActivated}
            input
            name="password"
            onChange={this.handleInputChange}
            type="password"
          />
        </FormItem>
        <Separator size="m" silent />
        <Actionbar>
          {this.state.signInActivated ? (
            <Preloader />
          ) : (
            <Action
              disabled={this.state.signInActivated}
              fixed
              onClick={this.handleSignIn}
              primary
            >
              Sign in
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
              input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </FormItem>
          <Separator size="m" silent />
          <FormItem>
            <Label>Password</Label>
            <TextInput
              input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </FormItem>
          <Separator size="m" silent />
          <FormItem>
            <Label>Email</Label>
            <TextInput
              input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormItem>
          <Separator size="m" silent />
          <Actionbar>
            <Action fixed primary onClick={this.handleSignUp}>
              Sign up
            </Action>
          </Actionbar>
        </Form>
      );
    };

    const renderRecover = () => (
      <Form onSubmit={(e) => this.handleForgotPassword(e)}>
        <Text typo="h5">
          Forgot Password<br /> Step 1
        </Text>
        <Separator dir="h" size="s" silent />
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
        <Actionbar>
          <Action fixed primary onClick={this.handleForgotPassword}>
            Forgot password
          </Action>
        </Actionbar>
        <Text typo="h4">Step 2</Text>
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
          <Label>Confimation Code</Label>
          <TextInput
            input
            type="text"
            name="code"
            value={this.state.code}
            onChange={this.handleInputChange}
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
          />
        </FormItem>
        <Separator size="m" silent />
        <Actionbar>
          <Action fixed primary onClick={this.handleConfirmForgotPassword}>
            Confirm forgot password
          </Action>
        </Actionbar>
      </Form>
    );

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
                Sign In
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
          <Separator size="s" silent />
          <ModalBody>
            {this.state.message ? (
              <Text typo="h3">{this.state.message}</Text>
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
