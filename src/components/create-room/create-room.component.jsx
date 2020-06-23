import React from "react";

import "./create-room.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class CreateRoom extends React.Component {
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
          <CustomButton>Create</CustomButton>
        </form>
      </div>
    );
  }
}

export default CreateRoom;
