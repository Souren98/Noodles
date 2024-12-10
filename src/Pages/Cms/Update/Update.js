import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  CardMedia,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatedetails, updateproduct } from "../../../Redux/crudSlice";

export default function Update() {
  const [imagePreview, setImagePreview] = useState(null);
  const { Editproduct } = useSelector((state) => state.crudKey);

  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const watchImage = watch("image");
  const newImage = watchImage && watchImage[0] ? URL.createObjectURL(watchImage[0]) : null;

  useEffect(() => {
    dispatch(updatedetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (Editproduct) {
      setValue("title", Editproduct.title);
      setValue("description", Editproduct.description);
      setImagePreview(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${Editproduct.image}` || "");
    }
  }, [Editproduct, setValue]);

  const Senddata = (e) => {
    const formdata = new FormData();
    formdata.append("id", id);
    formdata.append("title", e.title);
    formdata.append("description", e.description);
    formdata.append("image", e.image[0]);

    try {
      dispatch(updateproduct(formdata, id));
      setTimeout(() => navigate("/list"), 2000);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Container
      sx={{
        mt: "80px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "25px"


      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: "800px",
          p: "35px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
          borderRadius: "12px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: "25px",
            color: "#4a4a4a",
          }}
        >
          Update Product
        </Typography>

        <Box component='form' onSubmit={handleSubmit(Senddata)} >
        <Typography sx={{textAlign:'left', ml:1}}>Product Title</Typography>
          <TextField
            {...register("title", { required: true })}
            fullWidth
            // label="Product Title"
            variant="outlined"
            margin="normal"
            type="text"
            sx={{
              mb: "20px",
              "& .MuiInputLabel-root": { color: "#6a6a6a" },
            }}
            helperText={errors.title && <span style={{ color: "red" }}>This field is required</span>}
          />

          <Typography sx={{textAlign:'left',ml:1}}>Product Description</Typography>
          <TextField
            {...register("description", { required: true })}
            fullWidth
            // label="Product Description"
            variant="outlined"
            margin="normal"
            type="text"
            multiline
            rows={4}
            sx={{
              mb: "20px",
              "& .MuiInputLabel-root": { color: "#6a6a6a" },textAlign:"left"
            }}
            helperText={
              errors.description && <span style={{ color: "red" }}>This field is required</span>
            }
          />
          <Box
            display="flex"
            gap={2}
            mt={2}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box
              textAlign="center"
              sx={{
                width: { xs: "100%", sm: "48%", md: 300 }
              }}
            >
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Previous Image
              </Typography>
              {imagePreview ? (
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  image={imagePreview}
                  alt="Previous Product Image"
                />
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    bgcolor: "#e0e0e0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  No Existing Image Available
                </Box>
              )}
            </Box>

            <Box
              textAlign="center"
              sx={{
                width: { xs: "100%", sm: "48%", md: 300 }
              }}
            >
              <Typography variant="body1" color="text.secondary" gutterBottom>
                New Image Preview
              </Typography>
              {newImage ? (
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  image={newImage}
                  alt="New Product Image Preview"
                />
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    bgcolor: "#e0e0e0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  New Image Not Available. Please upload one.
                </Box>
              )}
            </Box>
          </Box>


          <TextField
            {...register("image", { required: true })}
            fullWidth
            variant="outlined"
            margin="normal"
            type="file"
            sx={{
              mb: "20px",
              "& .MuiInputLabel-root": { color: "#6a6a6a" },
            }}
            helperText={errors.image && <span style={{ color: "red" }}>This field is required</span>}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
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
            Update Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
