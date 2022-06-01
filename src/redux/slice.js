import { createSlice } from "@reduxjs/toolkit";

import {
  fetchPeopleAction,
  fetchPersonAction,
  addPersonAction,
  removePersonAction,
  editPersonAction,
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

    addPerson(state, action) {},

    editPerson(state, action) {},

    removePerson(state, action) {},

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
      state.people.push(action.payload.payload);
    });

    builder.addCase(removePersonAction.fulfilled, (state, action) => {
      const filteredArray = state.people.filter(
        (person) => person.id !== action.payload.payload.id
      );
      state.people.splice(0, state.people.length, ...filteredArray);
    });

    builder.addCase(editPersonAction.fulfilled, (state, action) => {
      // Create new array containing updated person along with all other unedited people and
      // set state.people equal to the new array
      // Doubt this is most efficient way of doing it but only way I could find
      // that updates the component without needing to refresh the page
      const updatedArray = state.people.map((person) =>
        person.id === action.payload.payload.id
          ? action.payload.payload
          : person
      );
      state.people.splice(0, state.people.length, ...updatedArray);
    });
  },
});

export const {
  setLoading,
  showError,
  fetchPeople,
  addPerson,
  editPerson,
  removePerson,
} = peopleSlice.actions;

export default peopleSlice.reducer;
