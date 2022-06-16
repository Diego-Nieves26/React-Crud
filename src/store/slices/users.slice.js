import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
  },
});

export const { setUsers } = usersSlice.actions;

export const getUsers = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://users-crud1.herokuapp.com/users/")
    .then((res) => dispatch(setUsers(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export default usersSlice.reducer;
