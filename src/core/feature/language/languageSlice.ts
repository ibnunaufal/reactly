import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveState, loadState, removeState } from "../browser-storage/browser-storage";

type InitialState = {
  language: String
}
const type = 'language'

const initialState: InitialState = {
  language: loadState(type)
}

export const languageSlice = createSlice({
  name: type,
  initialState: initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<String>) => {
      state.language = action.payload;
      saveState(type, action.payload)
    },
    removeLanguage: (state) => {
      state.language = "";
      removeState(type)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage, removeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
