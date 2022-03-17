import React from "react";
import Navigaion from "../../../Shared/Navigation/Navigaion";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Navigaion></Navigaion>
      <Banner></Banner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
      <Footer></Footer>

    </div>
  );
}

export default Home;
