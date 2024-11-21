/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create ProfileContext
export const ProfileContext = createContext();

// Create a Provider component
export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    _id: "",
    accountName: "",
    accountLastname: "",
    accountEmail: "",
    accountAliasName: "",
    accountPhone: "", // Updated to string for consistency
    accountPassword: "",
    accountRoleType: "",
    accountRenderDetails: {
      renderAccountEmail: null,
      renderAccountId: null,
      renderAccountName: null,
      renderRolType: null,
    },
    accountAppsDeployed: null,
  });

  // Provide state and updater to children
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook for consuming the ProfileContext
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
