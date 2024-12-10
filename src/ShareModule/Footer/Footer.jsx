import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2c2c2c",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Delicious Dishes
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#aaa" }}>
            Experience the taste of authentic and fresh dishes made just for you. 
            We aim to deliver the best culinary experience for food lovers.
          </Typography>
        </Grid>

  
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Link href="#" underline="none" sx={{ color: "#aaa", display: "block", mb: 1 }}>
            Home
          </Link>
          <Link href="#" underline="none" sx={{ color: "#aaa", display: "block", mb: 1 }}>
            Menu
          </Link>
          <Link href="#" underline="none" sx={{ color: "#aaa", display: "block", mb: 1 }}>
            About Us
          </Link>
          <Link href="#" underline="none" sx={{ color: "#aaa", display: "block", mb: 1 }}>
            Contact
          </Link>
        </Grid>

    
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" target="_blank" sx={{ color: "#aaa" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: "#aaa" }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: "#aaa" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: "#aaa" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

    
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid #555",
          paddingTop: "20px",
          marginTop: "30px",
          color: "#aaa",
        }}
      >
        <Typography variant="body2">
          © 2024 Delicious Dishes. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
