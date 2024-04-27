import React, { useEffect, useState } from "react";

export default function RewardCircle() {
  const [rewards, setRewards] = useState(0);
  var token = localStorage.getItem("rh_token");
  useEffect(() => {
    fetch("http://localhost:2020/getallrewards", {
      method: "GET",
      headers: {
        Accept: "application/form-data",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setRewards(res.totalRewards);
      });
  }, []);
  return (
    <>
      <div className="flex">
        <div className="flex col center rewardBubble">
          <div>{rewards}</div>
          <div>Total Rewards</div>
        </div>
      </div>
    </>
  );
}
