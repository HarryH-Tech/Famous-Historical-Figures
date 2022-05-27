import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, graphqlOperation, Amplify, Auth } from "aws-amplify";
import { listPeople } from "../graphql/queries";
import { createPerson } from "../graphql/mutations";

export const fetchPeopleAction = createAsyncThunk(
  "people_slice/fetchPeople",
  async () => {
    const res = await API.graphql(graphqlOperation(listPeople));
    return res.data.listPeople.items;
  }
);

export const addPerson = async (personData) => {
  console.log(personData);
  const req = await API.graphql(
    graphqlOperation(createPerson, { input: personData })
  );
  console.log(req.data);
  return req.data;
};

export const deletePerson = async (id) => {
  console.log(id);
};

export const peopleSlice = createSlice({
  name: "people_slice",
  initialState: {
    people: [],
    loading: false,
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
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPeopleAction.fulfilled, (state, action) => {
      // Add famous people to the state array
      state.people = action.payload;
    });
  },
});

export const { setLoading, fetchPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
