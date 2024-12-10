import React from "react";
import Slider from "react-slick";
import { Typography, useMediaQuery, Box } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biriyani from "../images/biriyani.png";
import chicken from "../images/chicken.png";
import frech from "../images/frech.png";
import chicken2 from "../images/chicken2.png";

const Newdish = () => {
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
        width: "83%",
        margin: "auto",
        alignItems: "center",
        gap: isSmallScreen ? 4 : 6,
        padding: isSmallScreen ? "20px 0" : "0",
        height: "auto",
        // height: {
        //   lg:"100vh",
        //   xl: "100vh",
        //   md: "80vh",
        //   sm: "60vh",
        //   xm:"40vh",
        // },
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "50%",
          // mb: isSmallScreen ? 4 : 0,
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src={biriyani}
              alt="Biriyani"
              style={{
                width: "100%",
                // maxHeight: "600px",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              src={chicken}
              alt="Chicken Dish"
              style={{
                width: "100%",
                maxHeight: "550px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              src={chicken2}
              alt="Ramen"
              style={{
                width: "85%",
                maxHeight: "550px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              src={frech}
              alt="Chowmin"
              style={{
                width: "100%",
                maxHeight: "550px",
                objectFit: "contain",
              }}
            />
          </div>
        </Slider>
      </Box>

      <Box
        className="newdish-content"
        sx={{
          width: isSmallScreen ? "100%" : "60%",
          pl: isSmallScreen ? 0 : 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: isSmallScreen ? "center" : "left",
            fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px', xl: '45px', }
          }}
        >
          Yummy Food
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            marginTop: "10px",
            lineHeight: "1.6",
            textAlign: isSmallScreen ? "center" : "left",
            fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '25px', }
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at
          aspernatur earum nostrum explicabo quam reiciendis sit nemo
          consectetur quaerat!
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-start",
            mt: 3,
          }}
        >
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
              textTransform: "uppercase"
            }}
          >
            Order Now
          </button>

        </Box>
      </Box>
    </Box >
  );
};

export default Newdish;
