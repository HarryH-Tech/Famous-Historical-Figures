import { createSlice } from "@reduxjs/toolkit";

import {
  fetchPeopleAction,
  fetchPersonAction,
  addPersonAction,
  deletePersonAction,
  showErrorAction,
} from "./Actions";

export const peopleSlice = createSlice({
  name: "people_slice",
  initialState: {
    people: [],
    person: [],
    loading: false,
    successMessage: "",
    errorMessage: "",
  },
  reducers: {
    fetchPeople(state, action) {
      state.people = action.payload;
      console.log(action);
    },

    fetchPerson(state, action) {
      console.log(action);
      state.person = action.payload;
    },

    addPerson(state, action) {
      // console.log(action.payload);
      // state.people.push(action.payload);
      // state.successMessage = "success";
    },

    deletePerson(state, action) {
      console.log(action);
    },

    showError: (state, action) => {
      console.log("action");
      console.log(action);
      state.errorMessage = action.payload;
    },

    setLoading(state, action) {
      console.log(action);
      state.loading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPeopleAction.fulfilled, (state, action) => {
      state.people = action.payload;
    });
    builder.addCase(fetchPersonAction.fulfilled, (state, action) => {
      state.person = action.payload;
    });
    builder.addCase(addPersonAction.fulfilled, (state, action) => {
      state.people.push(action.payload);
    });
  },
});

export const { setLoading, showError, fetchPeople, addPerson, deletePerson } =
  peopleSlice.actions;

export default peopleSlice.reducer;
