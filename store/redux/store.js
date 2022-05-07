import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "./favourites";

export const store = configureStore({
  reducer: {
    favouriteMeals: favouritesReducer,
  },
});

// Reducers are the different slices of state, so of data and actions that can
// change that data that are used by redux to then construct an overall store of data
// and actions.
