import { createSlice } from "@reduxjs/toolkit"
import cakeActions from "../cake/cakeSlice"
import { ordered as cakeOrdered } from "../cake/cakeSlice"

const initialState = {
  numOfIcecreams: 20,
}

export const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    },
  },
  // one way of accessing reducer from different file
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--
    })
  },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
