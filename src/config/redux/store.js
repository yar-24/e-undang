import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import goalReducer from './features/goals/goalSlice'
import payReducer from './features/pay/paySlice'
import snapReducer from './features/snap/snapSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    pay: payReducer,
    snap: snapReducer,
  },
})

export default store;