import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
const services = [
  {
    name: "Flouride Treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a lorem ac dolor suscipit ullamcorper ut ut augue. Morbi ac interdum risus, efficitur congue tortor. Sed sit amet lorem libero. ",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a lorem ac dolor suscipit ullamcorper ut ut augue. Morbi ac interdum risus, efficitur congue tortor. Sed sit amet lorem libero. ",
    img: cavity,
  },
  {
    name: "whitening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a lorem ac dolor suscipit ullamcorper ut ut augue. Morbi ac interdum risus, efficitur congue tortor. Sed sit amet lorem libero.",
    img: whitening,
  },
];
function Services() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, color: "success.main", m: 2 }}
        >
          OUR SERVICES
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, m: 5 }} component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
