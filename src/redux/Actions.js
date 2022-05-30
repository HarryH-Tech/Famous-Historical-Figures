import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, graphqlOperation } from "aws-amplify";
import { listPeople, getPerson } from "../graphql/queries";
import { createPerson, deletePerson, updatePerson } from "../graphql/mutations";
import { showError, addPerson } from "./Slice";

export const fetchPeopleAction = createAsyncThunk(
  "people_slice/fetchPeople",
  async () => {
    const res = await API.graphql(graphqlOperation(listPeople));
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
    console.log(res.data);
    return addPerson(res.data);
  }
);

export const deletePersonAction = createAsyncThunk(
  "people_slice/deletePerson",
  async (id) => {
    const res = await API.graphql(
      graphqlOperation(deletePerson, { input: { id } })
    );
    return res.data;
  }
);

export const editPersonAction = async (personData) => {
  const res = await API.graphql(
    graphqlOperation(updatePerson, { input: personData })
  );
  return res.data;
};

export const showErrorAction = (text) => {
  console.log(text);
  return showError(text);
};
