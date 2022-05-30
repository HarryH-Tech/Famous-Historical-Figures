import { useEffect } from "react";

// Redux Imports
import { useDispatch } from "react-redux";
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

// Styles + Image
import "./styles/App.css";
import people from "./styles/images/people.jpg";

Auth.configure(awsconfig);
API.configure(awsconfig);

const App = () => {
  const dispatch = useDispatch();
  //const state = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchPeopleAction());
  }, []);

  const components = {
    Header() {
      return (
        <div style={{ margin: "1rem auto", textAlign: "center" }}>
          <img style={{ width: "50%", height: "30%" }} src={people} />
          <h1>Famous People</h1>
        </div>
      );
    },
  };

  return (
    <>
      <Authenticator socialProviders={["facebook"]} components={components}>
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
