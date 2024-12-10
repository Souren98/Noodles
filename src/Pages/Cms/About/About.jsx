import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h2: { fontWeight: 700, color: '#d32f2f' },
    h5: { fontWeight: 600, color: '#555' },
    body1: { fontSize: '1.1rem', color: '#333' },
    body2: { fontSize: '0.95rem', color: '#555' },
  },
  palette: {
    primary: { main: '#d32f2f' },
    secondary: { main: '#fbc02d' },
  },
});

const sliderImages = [
  { url: 'https://i.pinimg.com/564x/17/fb/13/17fb13aa3ba5d7b6a6bbd4349af57446.jpg', alt: 'Delicious Ramen Bowl' },
  { url: 'https://i.pinimg.com/564x/42/a3/09/42a309b75d204e680e105c071d7bc698.jpg', alt: 'Stir-Fried Noodles' },
  { url: 'https://i.pinimg.com/564x/42/a3/09/42a309b75d204e680e105c071d7bc698.jpg', alt: 'Fresh Ingredients' },
];

export default function About() {
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', mt: { xs: '60px', md: '70px' }, mb: 5,overflowX: 'hidden' }}>
        
      
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <Box key={index} sx={{ position: 'relative', width: '100%' }}>
              <img
                src={image.url}
                alt={image.alt}
                style={{
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: { xs: '8px 15px', md: '10px 20px' },
                  borderRadius: '4px',
                  fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.5rem' },
                }}
              >
                {image.alt}
              </Typography>
            </Box>
          ))}
        </Slider>

        <Container maxWidth="md">
          
        
          <Box sx={{ textAlign: 'center', mb: 5, px: { xs: 2, sm: 3 },mt:4 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              About Our Noodles
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, maxWidth: { xs: '90%', md: '100%' }, mx: 'auto', color: '#444' }}>
              At Noodle Haven, we’re passionate about delivering authentic, flavorful noodle dishes. 
              Whether you crave spicy ramen or savory stir-fried noodles, each bowl is a culinary journey 
              inspired by tradition and crafted with quality ingredients.
            </Typography>
            <Divider sx={{ width: '50px', height: '4px', backgroundColor: 'primary.main', mx: 'auto', my: 3 }} />
          </Box>
          
        
          <Box sx={{ textAlign: 'center', mb: 5, px: { xs: 2, sm: 6 } }}>
            <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>Our Mission</Typography>
            <Typography variant="body1">
              We aim to bring the finest noodles to you, focusing on flavor, quality, and sustainability. 
              Each meal is a memorable experience, from the carefully selected ingredients to the vibrant 
              flavors in every bite.
            </Typography>
          </Box>
          
        
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {[
              { title: 'Ramen', image: 'https://i.pinimg.com/564x/3f/81/67/3f8167ad09086397c9afcc2608e8edd3.jpg', description: 'Enjoy our rich, flavorful ramen with an authentic broth.' },
              { title: 'Stir-Fried Noodles', image: 'https://i.pinimg.com/564x/75/e7/29/75e729e20f3f24a9b037efefef05d3dd.jpg', description: 'A deliciously savory option packed with veggies.' }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ boxShadow: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, borderRadius: "15px" }}>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="220"
                    image={item.image}
                    sx={{ filter: 'brightness(0.9)', objectFit: 'cover' }}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>Get in Touch</Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We’d love to hear from you! Reach us at 
              <span style={{ color: '#d32f2f', fontWeight: 'bold' }}> info@noodlehaven.com </span>
              or call us at <b>(123) 456-7890</b>.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(135deg, #ff512f, #dd2476)", 
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#FFA000", 
              },
            }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
