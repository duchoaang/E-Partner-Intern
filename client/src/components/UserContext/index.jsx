import React, { createContext, useState } from "react";
import avt from "@a/ImageMen/avt.png";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    uid: "",
    name: "Triển phạm",
    avatar: avt,
    gender: "",
  });

  const handleSetGender = (e) => {
    setUser(...user, { gender: e.target.value });
  };

  const value = {
    user,
    handleSetGender,
  }

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};
