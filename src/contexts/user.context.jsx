import {createContext, useEffect, useState} from "react";
import {checkUserExists, createUserDocumentFromAuth, onAuthStateChangeListener} from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    return onAuthStateChangeListener(async (user) => {
      if (user) {
        if (!await checkUserExists(user)) {
          await createUserDocumentFromAuth(user);
        }
      }
      setCurrentUser(user)
    });
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

