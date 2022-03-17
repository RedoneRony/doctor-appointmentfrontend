import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BookingModal from "../BookingModal/BookingModal";
// show all booking details
const Booking = ({ booking, date, setBookingSuccess }) => {
  const { serviceName, From, To, User, serviceCharge } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {serviceName}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
           Time: {From} - {To}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
          Doctor Email: {User} 
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Price ${serviceCharge}
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
