import { createSlice } from "@reduxjs/toolkit"
import cakeActions from "../cake/cakeSlice"
import { ordered as cakeOrdered } from "../cake/cakeSlice"

const initialState = {
  numOfIcecream: 20,
}

export const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload
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
      state.numOfIcecream--
    })
  },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
