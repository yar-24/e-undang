import React from "react";
import { DasboardProfile } from "../../componentsApp";
import { ThemeProvider } from "../../context";

const Profile = () => {
  return (
    <ThemeProvider>
      <DasboardProfile/>
    </ThemeProvider>
  );
};

export default Profile;
