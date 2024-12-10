import React from "react";
import Slider from "react-slick";
import { Typography, useMediaQuery, Box, } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chicken from "../images/chicken.png";
import ramen2 from "../images/ramen2.png";
import soup from "../images/soup.png"
import "../Banner/Banner.css";
import phrone from "../images/phrone.png"

const Opendish = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        width: "80%",
        margin: "auto",
        alignItems: "center",
        height: isSmallScreen ? "auto" : "100vh",
        // height: {
        //   lg:"100vh",
        //   xl: "100vh",
        //   md: "80vh",
        //   sm: "60vh",
        //   xm:"40vh",
        // },
        justifyContent: "center",
        padding: isSmallScreen ? "20px" : "0",
      }}
    >

      <Box
        sx={{
          width: isSmallScreen ? "100%" : "50%",
          pr: isSmallScreen ? 0 : "30px",
          mb: isSmallScreen ? 4 : 0,
          textAlign: isSmallScreen ? "center" : "left",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px', xl: '45px', } }}>
          Delicious Dishes
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", mt: 2, lineHeight: 1.6, fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '25px', } }}>
          Experience the finest selection of mouth-watering dishes, prepared with the freshest ingredients. A true feast for the senses awaits you!
        </Typography>
        <button
          className="new-button"
          style={{
            padding: "15px 30px",
            fontSize: "1.4rem",
            "&:hover": {
              backgroundColor: "#fddede",
            },
            color: "white",
            background: "linear-gradient(135deg, #ff7a18, #af002d 90%)",
            border: "none",
            borderRadius: "50px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.48)",
            cursor: "pointer",
            transition: "all 0.4s ease-in-out",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Order Now
        </button>
      </Box>


      <Box sx={{ width: isSmallScreen ? "100%" : "50%", textAlign: "center", }}>
        <Slider {...settings}>
          <div>
            <img
              src={chicken}
              alt="Chicken Dish"
              style={{
                width: "100%",
                // maxHeight: "550px",
                objectFit: "contain",
                maxHeight: "400px",
              }}
            />
          </div>

          <div>
            <img
              src={soup}
              alt="Biriyani"
              style={{ width: "100%", maxHeight: "550px", objectFit: "contain" }}
            />
          </div>

          <div>
            <img
              src={ramen2}
              alt="Ramen"
              style={{ width: "100%", maxHeight: "550px", objectFit: "contain" }}
            />
          </div>

          <div>
            <img
              src={phrone}
              alt="Chowmin"
              style={{ width: "100%", maxHeight: "550px", objectFit: "contain" }}
            />
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default Opendish;
