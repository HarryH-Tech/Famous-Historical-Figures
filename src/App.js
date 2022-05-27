import { useEffect, useState } from "react";

import { API, graphqlOperation, Amplify, Auth } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople, fetchPeopleAction } from "./redux/slice";

import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import Header from "./components/Header";
import AddPerson from "./components/AddPerson";
import PeopleList from "./components/PeopleList";

import "./styles/App.css";

Auth.configure(awsconfig);
API.configure(awsconfig);

const App = () => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeopleAction());
  }, []);

  console.log(state);

  return (
    <>
      <Header />
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello {user.username}</h1>
            <br />
            <h2>Famous Historical Figures</h2>
            <AddPerson />
            <PeopleList key={Math.random()} />
          </div>
        )}
      </Authenticator>
    </>
  );
};

export default App;
