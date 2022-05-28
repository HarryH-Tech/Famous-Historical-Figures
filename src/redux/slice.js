import { createSlice } from "@reduxjs/toolkit";

import {
  fetchPeopleAction,
  addPersonAction,
  deletePersonAction,
} from "./Actions";

export const peopleSlice = createSlice({
  name: "people_slice",
  initialState: {
    people: [],
    loading: false,
    error: "",
  },
  reducers: {
    setLoading(state, action) {
      console.log(action);
      state.loading = action.payload;
    },
    fetchPeople(state, action) {
      state.people = action.payload;
      console.log(action);
    },

    addPerson(state, action) {
      console.log(action);
      state.people = state.people.push(action.payload);
    },

    deletePerson(state, action) {
      console.log(action);
      // state.people.filter(id => action.payload)
    },

    showError(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPeopleAction.fulfilled, (state, action) => {
      // Add famous people to the state array
      state.people = action.payload;
    });
  },
});

export const { setLoading, fetchPeople, addPerson, deletePerson } =
  peopleSlice.actions;
export default peopleSlice.reducer;
