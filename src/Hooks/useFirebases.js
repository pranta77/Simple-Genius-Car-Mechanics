import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebases = () => {
  const [users, setUsers] = useState({});

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const GoogleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, GoogleProvider).then((result) => {
      setUsers(result.user);
    });
  };

  //   observe user state Change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (users) => {
      if (users) {
        setUsers(users);
      } else {
        setUsers({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logout = () => {
    signOut(auth).then(() => {});
  };

  return {
    users,
    signInUsingGoogle,
    logout,
  };
};

export default useFirebases;
