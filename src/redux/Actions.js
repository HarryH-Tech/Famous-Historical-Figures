import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, graphqlOperation } from "aws-amplify";
import { listPeople } from "../graphql/queries";
import { createPerson, deletePerson, updatePerson } from "../graphql/mutations";

export const fetchPeopleAction = createAsyncThunk(
  "people_slice/fetchPeople",
  async () => {
    const res = await API.graphql(graphqlOperation(listPeople));
    return res.data.listPeople.items;
  }
);

export const addPersonAction = async (personData) => {
  const req = await API.graphql(
    graphqlOperation(createPerson, { input: personData })
  );

  return req.data;
};

export const deletePersonAction = async (id) => {
  const req = await API.graphql(
    graphqlOperation(deletePerson, { input: { id } })
  );
  return req.data;
};

export const editPersonAction = async (personData) => {
  console.log(personData);
  const req = await API.graphql(
    graphqlOperation(updatePerson, { input: personData })
  );
  return req.data;
};

export const showErrorAction = (text) => {
  return text;
};
