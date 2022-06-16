import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import { getUsers } from "./users.slice";

export const userSelectedSlice = createSlice({
  name: "userSelected",
  initialState: null,
  reducers: {
    setUserSelected: (state, action) => action.payload,
  },
});

export const { setUserSelected } = userSelectedSlice.actions;

export const editUser = (id, data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .put(`https://users-crud1.herokuapp.com/users/${id}/`, data)
    .then(() => dispatch(getUsers()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addUser = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post("https://users-crud1.herokuapp.com/users/", data)
    .then(() => dispatch(getUsers()))
    .finally(() => dispatch(setIsLoading(false)));
};

export default userSelectedSlice.reducer;
