import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function PartnerStores() {
  // Enhanced example data for stores with URLs
  const stores = [
    { id: 1, name: "Store A", url: "https://www.iloveimg.com/" },
    { id: 2, name: "Store B", url: "https://storeb.com" },
    { id: 3, name: "Store C", url: "https://storec.com" },
    { id: 4, name: "Store D", url: "https://stored.com" },
    { id: 5, name: "Store E", url: "https://storee.com" },
    { id: 6, name: "Store F", url: "https://storef.com" },
    { id: 7, name: "Store G", url: "https://storeg.com" },
    { id: 8, name: "Store H", url: "https://storeh.com" },
    { id: 9, name: "Store I", url: "https://storei.com" },
  ];

  const handleStoreClick = (url) => {
    window.open(url, "_blank"); // This will open the store URL in a new tab
  };

  return (
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
  );
}
