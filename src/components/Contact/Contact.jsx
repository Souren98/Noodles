import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: "12px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
}));

const Contact= () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formValues);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 2, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <FormContainer elevation={3}>
            <Typography variant="h4" gutterBottom align="center">
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              We'd love to hear from you! Please fill out the form below.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                type="tel"
                value={formValues.phone}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                name="message"
                value={formValues.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: "12px",
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #ff7a18, #af002d 90%)",
                  borderRadius: "50px",
                  transition: "0.4s",
                  "&:hover": {
                    background: "linear-gradient(135deg, #ff512f, #dd2476)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </FormContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
