import React from "react";
import { DasboardNotification } from "../../componentsApp";
import { ThemeProvider } from "../../context";

const NotificationPage = () => {
  return (
    <ThemeProvider>
      <DasboardNotification />
    </ThemeProvider>
  );
};

export default NotificationPage;
