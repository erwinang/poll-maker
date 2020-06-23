import { all, call } from "redux-saga/effects";

import { fetchingRoomDetailsStart } from "./room/room.sagas";

export default function* rootSaga() {
  yield all([call(fetchingRoomDetailsStart)]);
}
