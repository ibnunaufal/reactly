import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveState, loadState } from "../browser-storage/browser-storage";

type InitialState = {
  loading: boolean
}

const initialState: InitialState = {
  loading: false
}

export const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = configSlice.actions;

export default configSlice.reducer;
