import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerpost } from "../../../Redux/authSlice";
import "./Register.css";

export default function Register() {
  const { redirectLogin } = useSelector((state) => state.authKey);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const Senddata = (e) => {
    const formdata = new FormData();
    formdata.append("first_name", e.first_name);
    formdata.append("last_name", e.last_name);
    formdata.append("email", e.email);
    formdata.append("password", e.password);
    formdata.append("profile_pic", e.profile_pic[0]);
    dispatch(registerpost(formdata));
  };

  const RedirectUser = () => {
    let name = localStorage.getItem("first_name");
  
    if (name !== null && name !== undefined && name !== "") {
      navigate("/login");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectLogin]);

  return (
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
          Register
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "text.secondary" }}
        >
          Fill in the details below to create your account.
        </Typography>

        <form onSubmit={handleSubmit(Senddata)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("first_name", { required: true })}
                fullWidth
                label="First Name"
                variant="outlined"
                margin="normal"
                helperText={
                  errors.first_name && <span>This field is required</span>
                }
                error={!!errors.first_name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("last_name", { required: true })}
                fullWidth
                label="Last Name"
                variant="outlined"
                margin="normal"
                helperText={
                  errors.last_name && <span>This field is required</span>
                }
                error={!!errors.last_name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
                fullWidth
                label="Email Address"
                variant="outlined"
                margin="normal"
                type="email"
                helperText={errors.email && <span>This field is required</span>}
                error={!!errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("password", { required: true })}
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                helperText={
                  errors.password && <span>This field is required</span>
                }
                error={!!errors.password}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("profile_pic", { required: true })}
                fullWidth
                variant="outlined"
                margin="normal"
                type="file"
                helperText={
                  errors.profile_pic && <span>This field is required</span>
                }
                error={!!errors.profile_pic}
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
                  "&:hover": {
                    backgroundColor: "#1DB07A",
                  },
                }}
              >
                Register
              </Button>
              
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
