import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "./Cardproduct.css"

const coffeeList = [
  {
    name: "Shirataki noodles",
    description: "These semi-translucent noodles have a rubbery texture and are zero-calorie.",
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/11/shirataki-noodles-pasta.jpg?quality=82&strip=1",
  },
  {
    name: "Harusame noodles",
    description: "Also known as glass noodles, these Japanese noodles can be longer than seven inches.",
    image: "https://i.ytimg.com/vi/f0JyqPsvgJM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1UmHP6ovYydlxqDORt9779w-EWQ",
  },
  {
    name: "Tokoroten noodles",
    description: "These sweet noodles are usually served cold and are made mostly of boiled tengusa seaweed water. ",
    image: "https://t4.ftcdn.net/jpg/04/46/20/57/360_F_446205771_2BHYFbUL8n3syWEL9FOUXxkcvDUEzVMd.jpg",
  },
  {
    name: "Canton noodles",
    description: "Egg noodles, usually round",
    image: "https://www.whiskaffair.com/wp-content/uploads/2021/04/Cantonese-Pan-Fried-Noodles-2-3.jpg",
  },
  {
    name: "Macchiato noodles",
    description: " Thick egg noodles.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/4b/2c/1b/carbonara.jpg",
  },
  {
    name: "Palabok noodles",
    description: "Yellow cornstarch noodles.",
    image: "https://assets.unileversolutions.com/recipes-v2/110766.jpg",
  }
];

export default function Cardproduct() {
  return (
    <Container sx={{ py: 4, maxWidth: "800px" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "black",
          textTransform: "uppercase",
          marginBottom: "2rem",
          fontFamily:"cursive",
          fontSize: {
            xs: "1.5rem",  
            sm: "2rem",    
            md: "2.5rem",  
            lg: "3rem" 
          },
          marginTop:"30px"
          
        }}
      >
        Noodles CATEGORY SECTION
      </Typography>
      <Grid container spacing={4}>
        {coffeeList.map((coffee, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 5,
                borderRadius: 3,
                transition: "transform 0.3s",
                height: "400px", 
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={coffee.image}
                alt={coffee.name}
                sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: {
                      xs: "1rem",   
                      sm: "1.25rem", 
                      md: "1.5rem",  
                      lg: "1.75rem"  
                    },
                  }}
                >
                  {coffee.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {coffee.description}
                </Typography>
                <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                        background: "linear-gradient(135deg, #ff512f, #dd2476)", 
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      padding: "10px 20px",
                      fontSize: {
                        xs: "0.75rem",   
                        sm: "0.875rem",  
                        md: "1rem",      
                        lg: "1.125rem"   
                      },
                      "&:hover": {
                        backgroundColor: "#FFA000", 
                      },
                    }}
                  >
                    SHOW MORE
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
