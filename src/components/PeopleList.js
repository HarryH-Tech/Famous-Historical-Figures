// Custom Imports
import AddPerson from "./AddPerson";
import PersonListItem from "./PersonListItem";
import "../styles/PeopleList.css";
import { useSelector, useDispatch } from "react-redux";

function PeopleList({ user }) {
  const state = useSelector((state) => state.data);

  return (
    <>
      <div id="intro-container">
        <h1>Hello {user.username}</h1>
        <br />
        <h2 style={{ textDecoration: "underline", marginBottom: "1.4rem" }}>
          Famous Historical Figures
        </h2>
      </div>
      <AddPerson />

      <div id="people-list-container">
        {state.people.length > 1
          ? state.people.map((person) => (
              <PersonListItem ket={Math.random()} person={person} />
            ))
          : null}
      </div>
    </>
  );
}

export default PeopleList;
