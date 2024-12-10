import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import Header from "../ShareModule/Header/Header";
import Footer from "../ShareModule/Footer/Footer";
import { chacktoken } from "../Redux/authSlice";



const Home = lazy(() => import("../Pages/Cms/Home/Home"));
const About = lazy(() => import("../Pages/Cms/About/About"));
const List = lazy(() => import("../Pages/Cms/List/List"));
const Create = lazy(() => import("../Pages/Cms/Create/Create"));
const Update = lazy(() => import("../Pages/Cms/Update/Update"));
const Profile = lazy(() => import("../Pages/Auth/Profile/Profile"));
const Login = lazy(() => import("../Pages/Auth/Login/Login"));
const Register = lazy(() => import("../Pages/Auth/Register/Register"));

function PrivateRouteWrapper({ children }) {
  const token = localStorage?.getItem("token") || sessionStorage?.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function RouterApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chacktoken());
  }, [dispatch]);

  const publicRoutes = [
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/register",
      Component: Register,
    },
    {
      path: "/login",
      Component: Login,
    },
  ];

  const privateRoutes = [
    {
      path: "/home",
      Component: Home,
    },
    {
      path: "/create",
      Component: Create,
    },
    {
      path: "/list",
      Component: List,
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "/update/:id",
      Component: Update,
    },
    {
      path: "/profile",
      Component: Profile,
    },
  ];

  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<Box width="100%" height="70vh" display="flex" justifyContent="center" alignItems="center">
          <Typography sx={{ mt: 3 }} textAlign="center" variant="h5">Loading....</Typography>
        </Box>}>
          <Routes>
            {publicRoutes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.Component />} />
            ))}
            {privateRoutes.map((item, index) => (
              <Route
                key={index + publicRoutes.length}
                path={item.path}
                element={
                  <PrivateRouteWrapper>
                    <item.Component />
                  </PrivateRouteWrapper>
                }
              />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default RouterApp;
