import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFzs0ZblRGjYj-88UYN1DNdkjowDFfJBk",
  authDomain: "pollmaker-4533d.firebaseapp.com",
  databaseURL: "https://pollmaker-4533d.firebaseio.com",
  projectId: "pollmaker-4533d",
  storageBucket: "pollmaker-4533d.appspot.com",
  messagingSenderId: "1057881455984",
  appId: "1:1057881455984:web:579dbea7b7b688d23923b5",
  measurementId: "G-EGNXQKB02T",
};

export const getRooms = async () => {
  const roomList = [];
  const roomRef = firestore.collection("rooms");
  const roomSnapShot = await roomRef.get();

  roomSnapShot.forEach((doc) => {
    roomList.push({ ...doc.data(), id: doc.id });
  });
  console.log(roomList);
  getQuestions(roomList[0]);
};

export const getDetails = async (roomName) => {
  const roomRef = firestore.collection("rooms");
  const roomSnapShot = await roomRef.get();
  const detailsMap = convertDetailsSnapshotToMap(roomSnapShot, roomName);
  console.log(detailsMap);
};

export const getQuestions = async (roomId) => {
  const questionList = [];
  const questionRef = firestore.collection(`rooms/${roomId.id}/questions`);
  const questionSnapShot = await questionRef.get();

  questionSnapShot.forEach((doc) => {
    questionList.push({ ...doc.data(), id: doc.id });
  });
  console.log(questionList[0]);
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const convertRoomsSnapshotToMap = (roomsSnapshot) => {
  const roomList = [];
  roomsSnapshot.forEach((doc) => {
    roomList.push({ ...doc.data(), id: doc.id });
  });
  return roomList;
};

export const convertDetailsSnapshotToMap = (roomsSnapshot, compareRoom) => {
  console.log("convertDetailsSnapshotToMap");
  const transformedDetails = roomsSnapshot.docs.map((docSnapshot) => {
    const { questions, polls, roomName } = docSnapshot.data();
    if (roomName === compareRoom) {
      return {
        roomName,
        id: docSnapshot.id,
        polls,
        questions,
      };
    }
    return {};
  });
  return transformedDetails;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
