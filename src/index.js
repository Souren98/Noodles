import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import WifiOffIcon from "@mui/icons-material/WifiOff";

import { ToastContainer } from "react-toastify";

import {  PulseLoader } from "react-spinners";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { NetworkProvider, useNetworkCheck } from "./Offline";

const RootComponent = () => {
  const { isOnline } = useNetworkCheck();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isOnline]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20vh" }}>
        <PulseLoader color="#eb0a5e" size={20} loading={loading} />
        {/* <ClipLoader  color={"#123abc"}  /> */}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <React.StrictMode>
      {isOnline ? (
        <Provider store={store}>
          <ToastContainer />
          <App />
        </Provider>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20vh" }}>
          <WifiOffIcon sx={{ width: "100px", height: "100px" }} />
          <p>You're currently offline. Please check your connection.</p>
        </div>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NetworkProvider>
    {" "}
    <RootComponent />
  </NetworkProvider>
);
