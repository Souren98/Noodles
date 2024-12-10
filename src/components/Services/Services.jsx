import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";


export default function Services() {
  return (
    <div>
    
      <Box sx={{ py: 8, backgroundColor: "#fafafa" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", letterSpacing: "1px", color: "#333" }}
            >
              Our Noodle Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 600, mx: "auto", color: "#666" }}
            >
              Enjoy a variety of noodle services from home delivery to exclusive noodle-making classes.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                image: "data:image/png;base64,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",
                name: "Home Delivery",
                description:
                  "Get fresh and hot noodle dishes delivered straight to your door.",
              },
              {
                image: "data:image/png;base64,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",
                name: "Dine-In Experience",
                description:
                  "Enjoy our special noodle dishes in a cozy dine-in environment.",
              },
              {
                image: "data:image/png;base64,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",
                name: "Noodle Cooking Classes",
                description:
                  "Learn how to make your favorite noodle dishes with our expert chefs.",
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    boxShadow: 3,
                    borderRadius: 3,
                    p: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)", 
                      boxShadow: 8, 
                    },
                  }}
                >
                  <CardMedia>
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                        mx: "auto",
                        mt: 2,
                        borderRadius: "50%", 
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  </CardMedia>

                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        color: "#222",
                        fontSize: "1.2rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#777", lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}