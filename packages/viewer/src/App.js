import { cloneElement } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

const mapStateToProps = (state) => ({
  story: state.story
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

const Main = (props) => cloneElement(props.children, props);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
