import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import rewardhub from "../resources/RewardHub.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
export default function Surveys() {
  return (
    <div>
      <div style={{ flex: 1, display: "flex", justifyContent: "top" }}>
        <img src={rewardhub} alt="Reward Hub logo" />
      </div>
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
              <h2>Collect more points with surveys</h2>
              <p>
                We’ve teamed up with Pureprofile Perks, a leading consumer
                research centre, to give you more ways to collect RewardHub
                points in exchange for a little bit of your time.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert("You clicked Surveys button!")}
            >
              View Surveys
            </Button>
          </div>
        </div>
      </Container>
      <Typography
        gutterBottom
        variant="h4"
        align-items="center"
        component="div"
      >
        How it works
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Select survey provider
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sign in to your Flybuys account, then select Pureprofile Perks
                from the ‘Surveys’ section under Offers.*
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Complete survey
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To complete surveys, you’ll need to set up a user profile. Tip:
                Be sure to check back regularly to complete more surveys.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Collect points
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Surveys generally take a few minutes to complete. Once done,
                you’ll get notified on-screen how many Reward points you’ve
                collected.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
