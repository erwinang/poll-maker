import React from "react";
import { connect } from "react-redux";

import "./enter-room.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { fetchRoomDetailsStart } from "../../redux/room/room.actions";

class EnterRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.dispatchFetchRoomDetailsStart(this.state.roomName);
    this.setState({ roomName: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="roomName"
            type="text"
            label="Room Name"
            value={this.state.roomName}
            handleChange={this.handleChange}
          />
          <CustomButton>Enter</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchRoomDetailsStart: (roomName) =>
    dispatch(fetchRoomDetailsStart(roomName)),
});

export default connect(null, mapDispatchToProps)(EnterRoom);
