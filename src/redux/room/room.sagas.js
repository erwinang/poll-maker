import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertRoomsSnapshotToMap,
  convertDetailsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchRoomsSuccess,
  fetchRoomsFailure,
  fetchRoomDetailsSuccess,
  fetchRoomDetailsFailure,
  fetchRoomDetailsStart,
} from "./room.actions";

import RoomActionTypes from "./room.types";

export function* fetchRoomsAsync() {
  try {
    const roomRef = firestore.collection("rooms");
    const snapshot = yield roomRef.get();
    const roomsMap = yield call(convertRoomsSnapshotToMap, snapshot);
    yield put(fetchRoomsSuccess(roomsMap));
  } catch (error) {
    yield put(fetchRoomsFailure(error.message));
  }
}

export function* fetchRoomsStart() {
  yield takeLatest(RoomActionTypes.FETCH_ROOMS_START, fetchRoomsAsync);
}

export function* fetchDetailsAsync(actions) {
  try {
    const roomName = yield fetchRoomDetailsStart.payload;
    console.log(actions);
    const roomRef = firestore.collection("rooms");
    const snapshot = yield roomRef.get();
    const detailsMap = yield call(
      convertDetailsSnapshotToMap,
      snapshot,
      roomName
    );
    yield put(fetchRoomDetailsSuccess(detailsMap));
  } catch (error) {
    yield put(fetchRoomDetailsFailure(error.message));
  }
}

export function* fetchingRoomDetailsStart() {
  yield takeLatest(RoomActionTypes.FETCH_ROOM_DETAILS_START, fetchDetailsAsync);
}
