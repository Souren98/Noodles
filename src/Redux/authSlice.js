import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";

const initialState = {
  uploadStatus: "idle",
  isRegistered: false,
  redirectLogin: null,
  redirectHome: null,
  isLogin: false,
  profileDetails: [],
  isLoading: null,
  isError: null
};

export const registerpost = createAsyncThunk("/register", async (formdata) => {
  let res = await axiosInstance.post("/user/signup", formdata);
  let resData = await res.data;
  return resData;
});

export const login = createAsyncThunk("/login", async (formdata) => {
  let res = await axiosInstance.post("/user/signin", formdata);
  let resData = await res.data;
  return resData;
});


export const profiledatafetch = createAsyncThunk('profile/profiledatafetch', async () => {
  let response = await axiosInstance.get("user/profile-details");
  let resData = await response.data;
  console.log("profiledetails,",resData)
  return resData;
}
)


export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    chacktoken:(state)=>{
     let token=localStorage.getItem('token');
     if(token !== null && token !== undefined) {
      state.isLogin =true;
     }
    },
    handelLogout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("first_name");
      localStorage.removeItem("profile_pic");
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerpost.pending, (state) => {
        state.uploadStatus = "loading...";
      })
      .addCase(registerpost.fulfilled, (state, { payload }) => {
        if (payload.status === 200) {
          toast.success("Register successfully!");
          localStorage.setItem("first_name", payload?.data.first_name);
          state.isRegistered = true;
          state.redirectLogin = "/login";
        } else if (payload.status === 201) {
          toast.error("Username already exists");
        }
      })
      .addCase(registerpost.rejected, (state) => {
        state.uploadStatus = "failed to register";
        toast.error("Register failed!");
      })
      .addCase(login.pending, (state) => {
        state.uploadStatus = "loading...";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload.status === 200) {
          localStorage.setItem("token", payload?.token);
          localStorage.setItem("first_name", payload?.data.first_name);
          localStorage.setItem("profile_pic", payload?.data.profile_pic);
          state.isLogin = true;
          toast.success("Login successfully!");
          state.redirectHome = "/home";
        } else if (payload.status === 201) {
          toast.error("Invalid username or password");
        }
      })
      .addCase(login.rejected, (state) => {
        state.uploadStatus = "failed to login";
        toast.error("Login failed!");
      })
      .addCase(profiledatafetch.pending, (state) => {
        state.isLoading = true;
        state.isError = null
      }).addCase(profiledatafetch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.profileDetails = payload?.data;
      }).addCase(profiledatafetch.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
  },
});

export const { handelLogout,chacktoken } = authSlice.actions;
export default authSlice;
