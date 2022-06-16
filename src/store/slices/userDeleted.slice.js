import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import { getUsers } from "./users.slice";

export const userDeletedSlice = createSlice({
  name: "userDeleted",
  initialState: null,
  reducers: {
    setUserDeleted: (state, action) => action.payload,
  },
});

export const { setUserDeleted } = userDeletedSlice.actions;

export const removeUser = (id, name) => (dispatch) => {
  console.log(id);
  dispatch(setIsLoading(true));
  return axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => {
      dispatch(setUserDeleted(name));
      dispatch(getUsers());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export default userDeletedSlice.reducer;
