import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "./../../constants";

const { LIGHT } = CONSTANTS.THEMES;

const SLICE_NAME = "theme";

const initialState = { theme: LIGHT };

const themeSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {},
});

const { reducer } = themeSlice;

export default reducer;
