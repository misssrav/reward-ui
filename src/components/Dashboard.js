import React from "react";
import DashboardTable from "./DashboardTable";
import RewardCircle from "./RewardCircle";

export default function Dashboard() {
  return (
    <div className="wrapperTable">
      <h2> Dashboard Page</h2>
      <div className="flex row">
        <div calssName="rewardCircle">
          <RewardCircle />
        </div>
        <div className="dashboardDiv grow1">
          <DashboardTable />
        </div>
      </div>
    </div>
  );
}
