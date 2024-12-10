import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productlist, deleteproduct } from "../../../Redux/crudSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Pagination,
} from "@mui/material";

import { Link } from "react-router-dom";
import { product } from "../../../Helper/Helper";
import SweetAlertComponent from "../../Sweetalert/Sweetalert";
import Login from "../../Auth/Login/Login";

export default function List() {
  const dispatch = useDispatch();
  const { List, totalpage } = useSelector((state) => state.crudKey);
  const [currentPage, setCurrentPage] = useState(1);
  const [delete_id, setDelete_id] = useState("");
  const [isdelete, setIsdelete] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    dispatch(productlist({ page: currentPage, perpage: 9 }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  if (!token || token === "undefined") {
    return <Login />;
  }

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  const deleteFunc = () => {
    if (delete_id !== "") {
      dispatch(deleteproduct(delete_id)).then(() => {
        dispatch(productlist({ page: currentPage, perpage: 10 }));
      });
    }
    setDelete_id("");
    setIsdelete(false);
  };

  return (
    <div>
      <Container sx={{ marginTop: "70px", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "40px",
          }}
        >
          Product List
        </Typography>
        <Grid container spacing={4}>
          {List && List.length > 0 ? (
            List.map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: "15px",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f5f5f5",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                    component="img"
                    alt={item.title}
                    height="180"
                    src={item?.image ? product(item?.image) : "error"}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#333",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        textAlign: "center",
                        fontStyle: "italic",
                        fontSize: "14px",
                      }}
                    >
                      {item.description}...
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        background: "linear-gradient(135deg, #ff512f, #dd2476)",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#fddede",
                        },
                      }}
                      onClick={() => {
                        setDelete_id(item._id);
                        setIsdelete(true);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      sx={{
                        background: "linear-gradient(135deg, #ff512f, #dd2476)",
                      }}
                    >
                      <Link
                        to={`/update/${item._id}`}
                        style={{
                          textDecoration: "none",

                          color: "white",
                        }}
                      >
                        Update
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ marginTop: "20px", textAlign: "center", width: "100%" }}
            >
              No products available... please create products.
            </Typography>
          )}
        </Grid>
      </Container>
      {isdelete && (
        <SweetAlertComponent
          onConfirm={deleteFunc}
          cancel={() => setIsdelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover this product!"}
        />
      )}

      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Pagination
              count={totalpage}
              page={currentPage}
              onChange={handlePagination}
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: "50%",
                  margin: "45px 5px",
                },
                "& .Mui-selected": {
                  background: "linear-gradient(135deg, #ff512f, #dd2476)",

                  color: "#fff",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
