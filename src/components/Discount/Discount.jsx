import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function DiscountSlideshow() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={1500}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "400px", md: "500px" },
              backgroundImage: `url('https://png.pngtree.com/background/20210711/original/pngtree-japanese-style-ramen-literary-minimalist-gray-banner-picture-image_1097602.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              textAlign: "center",
              flexDirection: "column",
              px: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "inherit",
                filter: "blur(8px)",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,0.6)",
                p: { xs: 2, md: 4 },
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "0.08em",
                  textShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  lineHeight: 1.2,
                }}
              >
                50% Off on Food items
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  textShadow: "2px 2px 7px rgba(0, 0, 0, 0.5)",
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.6rem" },
                }}
              >
                Discover your favorite Food now!
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#FFC107",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "12px 30px",
                  borderRadius: "30px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FFB300",
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "400px", md: "500px" },
              backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20231029/pngtree-assorted-asian-style-ramen-noodles-with-flavorful-sauce-image_13766439.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              textAlign: "center",
              flexDirection: "column",
              px: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "inherit",
                filter: "blur(8px)",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,0.6)",
                p: { xs: 2, md: 4 },
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "0.08em",
                  textShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  lineHeight: 1.2,
                }}
              >
                Limited Time Offer
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  textShadow: "2px 2px 7px rgba(0, 0, 0, 0.5)",
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.6rem" },
                }}
              >
                Get your favorite noodles at half the price!
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#FFC107",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "12px 30px",
                  borderRadius: "30px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FFB300",
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Grab the Deal
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "400px", md: "500px" },
              backgroundImage: `url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/top-view-of-japanese-noodle-soup-ramen-in-white-bowl-with-noodles-meat-broth-sliced-roasted-pork-narutomaki-egg-with-yolk-on-pastel-beige-background-olena-yeromenko.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              textAlign: "center",
              flexDirection: "column",
              px: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "inherit",
                filter: "blur(8px)",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,0.6)",
                p: { xs: 2, md: 4 },
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "0.08em",
                  textShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  lineHeight: 1.2,
                }}
              >
                Enjoy the Best Noodles Deals
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  textShadow: "2px 2px 7px rgba(0, 0, 0, 0.5)",
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.6rem" },
                }}
              >
                Don't miss out on our exclusive discounts!
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#FFC107",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "12px 30px",
                  borderRadius: "30px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FFB300",
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Explore Now
              </Button>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}
