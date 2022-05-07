import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  //   remember that we're allowed to write mutating logic, ONLY IN REDUX.
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    // the action param helps pass any extra data we may pass into the function,
    // stores it in the payload object
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
      //   could have used .filter method but no lele
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
