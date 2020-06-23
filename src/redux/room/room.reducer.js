import RoomActionTypes from "./room.types";

const INITIAL_STATE = {
  rooms: null,
  errorMessage: undefined,
};

const roomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoomActionTypes.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
      };
    case RoomActionTypes.FETCH_ROOM_DETAILS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
      };
    case RoomActionTypes.FETCH_ROOM_DETAILS_START:
      return {
        ...state,
        roomName: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
