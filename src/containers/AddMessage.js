//Wrapper
import { connect } from "react-redux";
import AddMessageComponent from "../components/AddMessage";
import { addMessage } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (message, author) => {
      dispatch(addMessage(message, author)); //Action
    },
  };
};

export const AddMessage = connect(
  () => ({}),
  mapDispatchToProps
)(AddMessageComponent);
