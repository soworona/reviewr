import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;