import React from "react";

import { DashboardPremium } from "../../componentsApp";
import { ThemeProvider } from "../../context";

const PremiumPage = () => {
  return (
    <ThemeProvider>
      {/* {!goals[0] || isUpdate ? <DashboardPremium /> : <ErrorPage /> } */}
      <DashboardPremium />
    </ThemeProvider>
  );
};

export default PremiumPage;
