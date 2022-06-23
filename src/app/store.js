import { configureStore } from "@reduxjs/toolkit"
//import reduxLogger "redux-logger"
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/user/userSlice"

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // by default the configure store fn adds some middleware to the redux store setup automatically. so to the list of default middleware, we append the logger middleware.
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
