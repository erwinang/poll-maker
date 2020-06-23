import RoomActionTypes from "./room.types";

export const fetchRoomsStart = () => ({
  type: RoomActionTypes.FETCH_ROOMS_START,
});

export const fetchRoomsSuccess = (collectionsMap) => ({
  type: RoomActionTypes.FETCH_ROOMS_SUCCESS,
  payload: collectionsMap,
});

export const fetchRoomsFailure = (errorMessage) => ({
  type: RoomActionTypes.FETCH_ROOMS_FAILURE,
  payload: errorMessage,
});

export const fetchRoomDetailsStart = (roomName) => ({
  type: RoomActionTypes.FETCH_ROOM_DETAILS_START,
  payload: roomName,
});

export const fetchRoomDetailsSuccess = (detailsMap) => ({
  type: RoomActionTypes.FETCH_ROOM_DETAILS_SUCCESS,
  payload: detailsMap,
});

export const fetchRoomDetailsFailure = (errorMessage) => ({
  type: RoomActionTypes.FETCH_ROOM_DETAILS_FAILURE,
  payload: errorMessage,
});
