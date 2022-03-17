import { Container, Grid, Typography, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import Booking from "../Booking/Booking";

// show all the available appointments
const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  console.log(services)
  const [bookingSuccess, setBookingSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/addService")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert severity="success">Appointment Booked successfully!</Alert>
      )}
      <Grid container spacing={2}>
        {services.map((service) => (
          <Booking
            key={service.id}
            booking={service}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
