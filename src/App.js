import { useEffect } from "react";

// Redux Imports
import { useDispatch } from "react-redux";
import { fetchPeopleAction } from "./redux/slice";

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

  useEffect(() => {
    dispatch(fetchPeopleAction());
  }, []);

  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <Router>
            <Header />{" "}
            <div>
              <h1>Hello {user.username}</h1>
              <br />
              <h2>Famous Historical Figures</h2>

              <Routes>
                <Route path="/" element={<PeopleList />} />
                <Route path="/people/:id" element={<Person />} />
              </Routes>
            </div>
          </Router>
        )}
      </Authenticator>
    </>
  );
};

export default App;
