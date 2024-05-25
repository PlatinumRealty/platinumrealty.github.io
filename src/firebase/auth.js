import { db, uid } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUp = async (email, password) => {
  let result = null;
  let error = null;

  try {
    // result = await createUserWithEmailAndPassword(auth, email, password).then(
    //   () => {
    //     const usersRef = db.collection("users").doc(uid);
    //     usersRef.set({
    //       email,
    //     });
    //   }
    // );
  } catch (e) {
    error = e;
  }
  return { result, error };
};

export const login = async (email, password) => {
  let result = null;
  let error = null;

  try {
    // result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
    console.log(e);
  }

  return { result, error };
};
