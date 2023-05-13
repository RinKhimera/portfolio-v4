"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  iDarkMode: false,
}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.iDarkMode = !state.iDarkMode
    },
  },
})

export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
