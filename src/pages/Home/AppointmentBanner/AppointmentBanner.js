import React from "react";
import Box from "@mui/material/Box";
import doctor from "../../../images/doctor.png";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import bg from "../../../images/appointment-bg.png";
import { Button } from "@mui/material";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74,.9)",
  backgroundBlendMode: "darken,luminosity",
  marginTop: 150,
};
function AppointmentBanner() {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            style={{ width: "400px", marginTop: "-110px" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 4 }}
              style={{ color: "#5CE7ED" }}
            >
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ mb: 4 }} style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut lectus malesuada velit efficitur posuere. Donec vitae
              vestibulum leo. Aenean tempor, erat a condimentum malesuada, diam
              arcu pretium nunc, quis pretium magna metus vitae felis. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppointmentBanner;
