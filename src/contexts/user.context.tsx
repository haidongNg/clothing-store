import React, {
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChangedlistener } from "../utils/firebase/firebas.utils";
export interface ICurrentUserContextType {
  currentUser: any;
  setCurrentUser: React.Dispatch<SetStateAction<any>>;
}

// as the actual value you wantto access
export const UserContext = createContext<ICurrentUserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

interface Props {
  children?: React.ReactNode;
}
export const UserProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChangedlistener((user) => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
