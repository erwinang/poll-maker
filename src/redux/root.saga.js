import { all } from "redux-saga/effects";

import roomSagas from "./room/room.sagas";

export default function* rootSaga() {
  yield all([...roomSagas]);
}
