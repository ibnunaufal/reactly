import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./config/configSlice";
import languageSlice from "./language/languageSlice";

// export default configureStore({
//   reducer: {
//     company: companyReducer,
//   },
// });
const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: configReducer,
    preloadedState,
  });
}

export const store = configureStore({
  reducer: {
    config: configReducer,
    language: languageSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;