import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store";

type ThemeMode = "light" | "dark";

export interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        localStorage.setItem("theme", state.mode);
      } else {
        state.mode = "light";
        localStorage.setItem("theme", state.mode);
      }
    },
    initTheme: (state) => {
      let _mode = localStorage.getItem("theme") as ThemeMode | null;

      if (!_mode) _mode = "light";

      state.mode = _mode;
    },
  },
});

export const { toggleTheme, initTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.themeSlice.mode;

export default themeSlice.reducer;
