import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, graphqlOperation } from "aws-amplify";
import { listPeople, getPerson } from "../graphql/queries";
import { createPerson, deletePerson, updatePerson } from "../graphql/mutations";

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
    console.log(id);
    const res = await API.graphql(graphqlOperation(getPerson, { id }));
    console.log("res");
    return res.data.getPerson;
  }
);

export const addPersonAction = createAsyncThunk(
  "people_slice/addPerson",
  async (personData) => {
    const res = await API.graphql(
      graphqlOperation(createPerson, { input: personData })
    );
    console.log("hi");
    return res.data;
  }
);

export const deletePersonAction = async (id) => {
  const res = await API.graphql(
    graphqlOperation(deletePerson, { input: { id } })
  );
  return res.data;
};

export const editPersonAction = async (personData) => {
  console.log(personData);
  const res = await API.graphql(
    graphqlOperation(updatePerson, { input: personData })
  );
  return res.data;
};

export const showErrorAction = (text) => {
  console.log(text);
  return text;
};
