import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const goToLink = (link) => {
  window.location.href = link;
}

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            component="img"
            height="400"
            image="/aoe2.jpg"
            alt="Age of Empires 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Age Of Empires 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              One of the best strategy games of all time, now with 40+
              Civilizations. This is a database application which utilizes data made available through a public API on Github. Stream link for the Game
              as well as the link for the API used can be found below.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => goToLink('https://github.com/aalises/age-of-empires-II-api')}>API Link</Button>
            <Button size="small" onClick={() => goToLink('https://store.steampowered.com/app/221380/Age_of_Empires_II_2013/')}>Steam Link</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default HomePage;
