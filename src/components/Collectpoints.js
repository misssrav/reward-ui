import React from "react";
import image from "../resources/Sample.png";
import { Link } from "react-router-dom";
export default function Collectpoints() {
  return (
    <div>
      <div className="logo-container">
        <img className="image" alt="logo" src={image} />
      </div>
      <div>
        <h1>Collect points at 20+ partners</h1>
        <p>
          Get more out of every day (and every dollar) when you sign up with us.
          With 20+ partners and thousands of stores where you can collect
          points, Reward Hub is everywhere you are. From the weekly shop to
          filling up the car, start scanning and collecting points to get more
          rewards, holidays and money off your shop.
        </p>
        {/* <button className="login" onClick={() => {}}>
          Explore Stores
        </button> */}
        <Link to="/partner-stores" className="partner-stores">
          Explore Stores
        </Link>
        <Link to="/surveys" className="survey">
          Explore Surveys
        </Link>
      </div>
    </div>
  );
}
