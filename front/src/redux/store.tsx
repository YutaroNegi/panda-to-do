import { configureStore } from '@reduxjs/toolkit'
import listSlice from './listSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
      lists: listSlice, 
      user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store