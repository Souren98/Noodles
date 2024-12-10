import React, { useState } from "react";
import "./Home.css";
import Banner from "../../../components/Banner/Banner";
import Services from "../../../components/Services/Services";
import Newdish from "../../../components/Newdish/Newdish";
import Opendish from "../../../components/Opendish/Opendish";
import Cardproduct from "../../../components/Cardproduct/Cardproduct";
import AttractiveButton from "../../../components/Button/Button";
import DiscountSlideshow from "../../../components/Discount/Discount";
import Review from "../../../components/Review/Review";

import Contact from "../../../components/Contact/Contact";
import Login from "../../Auth/Login/Login";

import { useSelector } from "react-redux";
import { Typography } from "@mui/material";


export default function Home() {
  const { redirectHome, isLogin } = useSelector((state) => state.authKey);
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token || token === "undefined") {
    return <Login />;
  }

  return (
    <>
      <Banner />
      <Typography sx={{textAlign:'center',fontSize:'50px',mt:'15px',fontWeight:'700', fontFamily:'cursive'}}>NOODLES DESCRIPTION</Typography>
      <Newdish />
      <Opendish />
      <Cardproduct />
      <AttractiveButton />
      <DiscountSlideshow />
      <Services />
 
      <Contact />
      <Review />
    </>
  );
}
