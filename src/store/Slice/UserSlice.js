import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
      // console.log("Actions",action.payload)
    },
    // removeUser(state, action) {
    //   // state.pop(action.payload)
    //   // state.splice(action.payload, 1)
    //   return state.filter((user,index)=>index !== action.payload)
    // },
    removeUser(state, action) {
      // Use filter to create a new array without the removed user
      return state.filter((user, index) => index !== action.payload);
    },
    clearAllUser(state, action) {
      // You can implement this if needed
      return state = [];
    },
  },
});

console.log(userSlice.actions)

export default userSlice.reducer;

export const { addUser, removeUser, clearAllUser } = userSlice.actions;
