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
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../Redux/authSlice";
import "./Login.css";

export default function Login() {
  const { redirectHome } = useSelector((state) => state.authKey);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const Senddata = (e) => {
    const formdata = {
      email: e.email,
      password: e.password,
    };
    dispatch(login(formdata));
  };

  const RedirectUser = () => {
    const token = localStorage.getItem("token");
    const currentPath = window.location.pathname.toLowerCase();
    const restrictedPaths = ["/login", "/"]; 

    
    if (token && restrictedPaths.includes(currentPath)) {
      navigate("/home");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectHome]);

  return (
    <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
      <Paper
        elevation={6}
        sx={{
          padding: "30px",
          maxWidth: "500px",
          margin: "0 auto",
          borderRadius: "5%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "text.secondary" }}
        >
          Enter your credentials to access your account.
        </Typography>

        <form onSubmit={handleSubmit(Senddata)}>
          <Grid container spacing={2}>
          
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
                Login
              </Button>
            </Grid>

          
            <Grid
              item
              xs={12}
              sx={{ display: "coloum", justifyContent: "center" }}
            >
              <p>Don’t have an account?</p>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
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
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
