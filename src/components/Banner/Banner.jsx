import React from "react";
import Slider from "react-slick";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ramen from '../../components/images/ramen.png'


const QuizAppBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const banners = [
    {
      image: ramen,
      title: "Spicy Noodles",
      description: "Noodles can be made into a variety of shapes, but are generally distinguished from pasta by their elongated ribbon-like form. ",
    },
    {
      image: ramen,
      title: "Explore Now",
      description: "Noodles are usually cooked in boiling water, but can also be pan-fried or deep-fried.",
    },
    {
      image: ramen,
      title: "Delicious Food",
      description: "Noodles are commonly used to add body and flavor to broth soups, or eaten with butter, cheese, or sauce.",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: "10px", md: "20px" },
        borderRadius: "10px",
        backgroundColor: "background.paper",
        marginTop: "59px",
        background: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #f8e8e9, #f6edec, #f7eae6, #f9dde2, #f3f0fb)"
      }}
    >

      {banners && Array.isArray(banners) ? (
        <Container>
          <Slider {...settings}>
            {banners.map((banner, index) => (
              <div key={index}>
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                >

                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#333",
                        fontSize: { xs: "24px", sm: "28px", md: "45px" },
                        fontWeight: "bold",
                        textAlign: { xs: "center", md: "left" },
                        marginTop: { md: "98px" },
                      }}
                    >
                      {banner.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#333",
                        fontSize: { xs: "15px", sm: "16px", md: "20px" },
                        fontStyle: "italic",
                        fontFamily: 'cursive',
                        textAlign: { xs: "center", md: "left" },
                        marginBottom: "20px",
                      }}
                    >
                      {banner.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        display: "block",
                        margin: { xs: "0 auto", md: "0" },
                        padding: "12px 50px",
                        background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                        boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.4)",
                        borderRadius: "30px",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transition: "all 0.4s ease",
                        background: "linear-gradient(135deg, #ff512f, #dd2476)",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#fddede",
                        },
                      }}

                    >
                      Order Now
                    </Button>
                  </Grid>


                  <Grid item xs={12} md={6}>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={banner.image || "https://via.placeholder.com/400x300?text=No+Image"}
                        alt={banner.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </Container>
      ) : (
        <Typography align="center" sx={{ color: "gray" }}>
          No banner data available.
        </Typography>
      )}
    </Paper>
  );
};

export default QuizAppBannerSlider;
