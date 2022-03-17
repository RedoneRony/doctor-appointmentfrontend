import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// booking available appointments
const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { serviceName, From, To, serviceCharge } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      From,
      To,
      serviceCharge,
      serviceName: serviceName,
      date: date.toLocaleDateString(),
    };
    // send to the server
    axios
      .post("http://localhost:5000/appointments", appointment)
      .then((res) => {
        if (res.data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    e.preventDefault();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {serviceName}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
          
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
            disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
