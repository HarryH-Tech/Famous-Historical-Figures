import React, { useEffect, useState } from "react";
import { API, graphqlOperation, Amplify, Auth } from "aws-amplify";
import { listPeople } from "./graphql/queries";

import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AddPerson from "./components/AddPerson";
import PeopleList from "./components/PeopleList";

Auth.configure(awsconfig);
API.configure(awsconfig);

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  async function fetchPeople() {
    try {
      const peopleData = await API.graphql(graphqlOperation(listPeople));
      console.log(peopleData);
      const people = peopleData.data.listPeople.items;
      setPeople(people);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <br />
            <h2>Famous Historical Figures</h2>
            <AddPerson setPeople={setPeople} people={people} />
            {people &&
              people.map((person) => (
                <PeopleList key={Math.random()} person={person} />
              ))}
          </div>
        )}
      </Authenticator>
    </>
  );
};

export default App;
