import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import "./room-page.styles.scss";
import { fetchRoomsStart } from "../redux/room/room.actions";

import EnterRoom from "../components/enter-room/enter-room.component";
import CreateRoom from "../components/create-room/create-room.component";

class RoomPage extends React.Component {
  componentDidMount() {
    const { fetchRoomsStart } = this.props;
    // fetchRoomsStart();
  }

  render() {
    return (
      <div>
        <EnterRoom />
        <CreateRoom />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRoomsStart: () => dispatch(fetchRoomsStart()),
});

export default connect(null, mapDispatchToProps)(RoomPage);
