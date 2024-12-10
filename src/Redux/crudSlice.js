import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";

const initialState = {
  upload_status: "",
  List: [{}],
  totalpage: "",
  Editproduct: null,
};

export const createpost = createAsyncThunk("/create", async (formData) => {
  const res = await axiosInstance.post("/product/create", formData);
  return res.data;
});

export const productlist = createAsyncThunk(
  "/list",
  async ({ page = 1, perpage = 10 }) => {
    const res = await axiosInstance.post(`/product/list`, {
      page,
      perpage,
    });
    return res.data;
  }
);

export const deleteproduct = createAsyncThunk("/delete", async (id) => {
  const res = await axiosInstance.post(`/product/remove`, { id });
  return res.data;
});

export const updatedetails = createAsyncThunk("/updatedetails", async (id) => {
  const res = await axiosInstance.get(`/product/detail/${id}`);
  return res.data;
});

export const updateproduct = createAsyncThunk(
  "/update",
  async (formData, id) => {
    const res = await axiosInstance.post(`/product/update`, formData);
    return res.data;
  }
);

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createpost.pending, (state) => {
        state.upload_status = "loading...";
      })
      .addCase(createpost.fulfilled, (state,{payload}) => {
        state.upload_status = "Product submitted successfully";
        toast.success("Product created successfully!");
      })
      .addCase(createpost.rejected, (state) => {
        state.upload_status = "Failed to create product";
      })

      .addCase(productlist.pending, (state) => {
        state.upload_status = "Fetching product data";
      })
      .addCase(productlist.fulfilled, (state, { payload }) => {
        state.upload_status = "Successfully fetched products";
        console.log("payload:", payload);
    
        state.List = payload?.data;

        state.totalpage = payload?.totalPages;
      })
      .addCase(productlist.rejected, (state) => {
        state.upload_status = "Failed to fetch product data";
      })

      .addCase(deleteproduct.pending, (state) => {
        state.upload_status = "Deleting data...";
      })
      .addCase(deleteproduct.fulfilled, (state) => {
        state.upload_status = "Product deleted successfully";
      })
      .addCase(deleteproduct.rejected, (state) => {
        state.upload_status = "Failed to delete product";
      })

      .addCase(updatedetails.pending, (state) => {
        state.upload_status = "Loading product details...";
      })
      .addCase(updatedetails.fulfilled, (state, { payload }) => {
        state.upload_status = "Product details fetched successfully";
        console.log("payload", payload.data);
        state.Editproduct = payload?.data;
      })
      .addCase(updatedetails.rejected, (state) => {
        state.upload_status = "Failed to fetch product details";
      })

      .addCase(updateproduct.pending, (state) => {
        state.upload_status = "Updating product...";
      })
      .addCase(updateproduct.fulfilled, (state) => {
        state.upload_status = "Product updated successfully";
        toast.success("Update sucessfully");
      })
      .addCase(updateproduct.rejected, (state) => {
        state.upload_status = "Failed to update product";
        toast.success("Product update error!");
      });
  },
});

export default crudSlice;
