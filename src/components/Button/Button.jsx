import React from "react";
import { Button, Box } from "@mui/material";

const AttractiveButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
        paddingBottom:"56px"
      }}
    >
      <Button
        variant="contained" 
        
        size="large"
        sx={{
          backgroundColor: "#FFC107", 
          color: "#fff", 
          fontWeight: "bold",
          padding: "12px 30px",
          borderRadius: "30px", 
          transition: "all 0.3s ease",
          textTransform: "capitalize",
          "&:hover": {
            background: "transparent",
            color: "#FFC107", 
            border: "2px solid #FFC107", 
            transform: "scale(1.05)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        EXPLORE
      </Button>
    </Box>
  );
};

export default AttractiveButton;
