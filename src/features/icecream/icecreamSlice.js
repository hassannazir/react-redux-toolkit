const {
  ordered: cakeOrdered,
  restocked: cakeRestocked,
} = require("../cake/cakeSlice");
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     //this will also executes along with cake reducer when cakeOrdered dispatch
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecreams--;
  //     },
  //   },
  //recommended way
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
    builder.addCase(cakeRestocked, (state, action) => {
      state.numOfIcecreams += action.payload;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
