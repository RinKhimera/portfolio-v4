import darkReducer from "@/hooks/Darkmode"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    dark: darkReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
