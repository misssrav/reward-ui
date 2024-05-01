import React, { useEffect, useState } from "react";
import profile from "../resources/profile.png";

export default function Profile() {
  var token = localStorage.getItem("rh_token");
  const [userDetails, setDetails] = useState({});
  useEffect(() => {
    fetch("http://34.125.34.237:2020/userdetails", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="profileWrapper">
      <div>
        <div className="profileBox">
          <div className="profilePic">
            <img
              className="profilePicture"
              src={profile}
              alt="fbejfw"
              width="200px"
            />
          </div>
          <div className="profileDetails">
            <div className="profileDetail">
              First tName : {userDetails ? userDetails?.user?.firstName : ""}
            </div>
            <div className="profileDetail">
              Last tName : {userDetails ? userDetails?.user?.lastName : ""}
            </div>
            <div className="profileDetail">
              Email : {userDetails ? userDetails?.user?.email : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
