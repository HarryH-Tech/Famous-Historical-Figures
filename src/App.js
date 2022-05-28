import { useEffect } from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleAction } from "./redux/Actions";

// Amplify Imports
import { API, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

//Custom Components
import Header from "./components/Header";
import PeopleList from "./components/PeopleList";
import Person from "./components/Person";

//React Routeer
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styles
import "./styles/App.css";

Auth.configure(awsconfig);
API.configure(awsconfig);

const App = () => {
  const dispatch = useDispatch();
  //const state = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchPeopleAction());
  }, []);

  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <Router>
            <Header signOut={signOut} user={user} />{" "}
            <Routes>
              <Route path="/" element={<PeopleList user={user} />} />
              <Route path="/people/:id" element={<Person />} />
            </Routes>
          </Router>
        )}
      </Authenticator>
    </>
  );
};

export default App;
