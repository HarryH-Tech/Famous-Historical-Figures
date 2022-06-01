import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, graphqlOperation } from "aws-amplify";
import { listPeople, getPerson } from "../graphql/queries";
import {
  createPerson,
  deletePerson,
  updatePerson,
  deletePeople,
} from "../graphql/mutations";
import { showError, addPerson, editPerson, removePerson } from "./Slice";

export const fetchPeopleAction = createAsyncThunk(
  "people_slice/fetchPeople",
  async () => {
    const res = await API.graphql(graphqlOperation(listPeople));
    console.log(res.data.listPeople.items);
    return res.data.listPeople.items;
  }
);

export const fetchPersonAction = createAsyncThunk(
  "people_slice/fetchPerson",
  async (id) => {
    const res = await API.graphql(graphqlOperation(getPerson, { id }));
    return res.data.getPerson;
  }
);

export const addPersonAction = createAsyncThunk(
  "people_slice/addPerson",
  async (personData) => {
    console.log(personData);
    const res = await API.graphql(
      graphqlOperation(createPerson, { input: personData })
    );
    console.log(res.data.createPerson);
    return addPerson(res.data.createPerson);
  }
);

export const removePersonAction = createAsyncThunk(
  "people_slice/deletePerson",
  async (id) => {
    const res = await API.graphql(
      graphqlOperation(deletePerson, { input: { id } })
    );
    console.log("RES");
    console.log(res.data.deletePerson);
    return removePerson(res.data.deletePerson);
  }
);

export const deletePeopleAction = createAsyncThunk(
  "people_slice/deletePeople",
  async (ids) => {
    const res = await API.graphql(
      graphqlOperation(deletePeople, { input: { ids } })
    );

    return res.data;
  }
);

export const editPersonAction = createAsyncThunk(
  "people_slice/editPerson",
  async (personData) => {
    const res = await API.graphql(
      graphqlOperation(updatePerson, { input: personData })
    );
    console.log(res.data.updatePerson);
    return editPerson(res.data.updatePerson);
  }
);

export const showErrorAction = (text) => {
  console.log(text);
  return showError(text);
};
