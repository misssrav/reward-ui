import React from "react";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <div className="wrapperTable">
      <div className="dashboardDiv">
        Dashboard Page
        <DashboardTable />
      </div>
    </div>
  );
}
