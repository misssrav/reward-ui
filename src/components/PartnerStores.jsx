import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function PartnerStores() {
  // Enhanced example data for stores with URLs
  const stores = [
    { id: 1, name: "Shoppie", url: "http://34.125.34.237:82" },
    { id: 2, name: "Archies", url: "http://34.125.34.237:83" },
  ];

  const handleStoreClick = (url) => {
    window.open(url, "_blank"); // This will open the store URL in a new tab
  };

  return (
    <div className="storeWrapper">
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Reward Hub Partners
        </Typography>
        <Grid container spacing={3}>
          {stores.map((store) => (
            <Grid item xs={12} sm={6} md={4} key={store.id}>
              <Paper
                elevation={3}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleStoreClick(store.url)} // Add click handler here
              >
                <Typography variant="h6">{store.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
