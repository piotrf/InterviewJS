import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

const mapStateToProps = state => ({
  stories: state.stories,
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const Main = props => React.cloneElement(props.children, props);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
