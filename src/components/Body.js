import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import rewardhub from "../resources/RewardHub.png";

const Body = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            height: "300px",
          }}
        >
          <div>
            <h2>Welcome to Reward Hub</h2>
            <p>Start getting rewards from your everyday spending.</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Thanks for joining!")}
          >
            Join Now
          </Button>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img src={rewardhub} alt="Reward Hub logo" />
        </div>
      </div>
    </Container>
  );
};

export default Body;
