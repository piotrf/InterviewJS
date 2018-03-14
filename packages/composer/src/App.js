import { cloneElement } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import * as actionCreators from "./actions/actionCreators";

const mapStateToProps = (state) => ({
  stories: state.stories,
  user: state.user
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

const Main = (props) => cloneElement(props.children, props);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

// export default compose(
//   firebaseConnect([
//     'stories' // { path: '/stories' } // object notation
//   ]),
//   connect((state) => ({
//     stories: state.firebase.data.stories || state.stories,
//     user: state.user,
//     // profile: state.firebase.profile // load profile
//   }))
// )(Main)
