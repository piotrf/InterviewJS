import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

const mapStateToProps = state => ({
  stories: state.stories
  // comments: state.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const Main = props => <div>{React.cloneElement(props.children, props)}</div>;

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
