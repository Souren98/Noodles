import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createpost } from "../../../Redux/crudSlice";
import "./Create.css";
import { useEffect, useState } from "react";
import Login from "../../Auth/Login/Login";
import { useNavigate } from "react-router-dom";



export default function Create() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [token, settoken] = useState("");

  const gettoken = localStorage.getItem("token");

  useEffect(() => {
    settoken(gettoken);
  }, [gettoken]);

  const senddata = (e) => {
    const formdata = new FormData();
    formdata.append("title", e.title);
    formdata.append("description", e.description);
    formdata.append("image", e.image[0]);
   
    try {
      dispatch(createpost(formdata)); 
       setTimeout(() => navigate("/list"), 2000); 
     } catch (error) {
       console.error("Error creating post:", error);
     }
  };

  return (
    <div>
      {token ? (
        <>
          <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
            <Paper
              elevation={6}
              sx={{
                padding: "30px",
                maxWidth: "600px",
                margin: "0 auto",
                borderRadius: "5%",
              }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Create a New Post
              </Typography>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
                sx={{ color: "text.secondary" }}
              >
                Fill in the details below to create your new post.
              </Typography>

              <form onSubmit={handleSubmit(senddata)}>
                <Grid container spacing={2}>
                
                  <Grid item xs={12}>
                    <TextField
                      {...register("title", { required: true })}
                      fullWidth
                      label="Post Title"
                      variant="outlined"
                      margin="normal"
                      helperText={
                        errors.title && <span>This field is required</span>
                      }
                      error={!!errors.title}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      {...register("description", { required: true })}
                      fullWidth
                      label="Description"
                      variant="outlined"
                      margin="normal"
                      multiline
                      rows={4}
                      helperText={
                        errors.description && (
                          <span>This field is required</span>
                        )
                      }
                      error={!!errors.description}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      {...register("image", { required: true })}
                      fullWidth
                      label="Upload Image"
                      variant="outlined"
                      margin="normal"
                      type="file"
                      helperText={
                        errors.image && <span>This field is required</span>
                      }
                      error={!!errors.image}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: "linear-gradient(135deg, #ff512f, #dd2476)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "80px",
                        "&:hover": {
                          backgroundColor: "#1DB07A",
                        },
                      }}
                    >
                      Create Post
                    </Button>
                  
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
