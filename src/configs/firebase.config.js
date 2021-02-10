import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  /* enter your keys here */

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
