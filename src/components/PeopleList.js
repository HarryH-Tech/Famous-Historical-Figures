import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";

// Custom Imports
import AddPerson from "./AddPerson";
import PersonListItem from "./PersonListItem";
import "../styles/PeopleList.css";
import { useSelector, useDispatch } from "react-redux";

function PeopleList({ user }) {
  const [checked, setChecked] = useState(false);
  const [peopleIds, setPeopleIds] = useState([]);

  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  // When checkbox is (un)selected remove/add id to the peopleIds array
  const handleSelectItemChange = (event, id) => {
    setChecked(!checked);
    var index = peopleIds.indexOf(id);
    if (index > -1) {
      peopleIds.splice(index, 1);
    } else {
      peopleIds.push(id);
    }
  };

  // When user clicks to delete multiple people
  const deleteMultiplePeople = (peopleIds) => {
    // dispatch(fetchPersonAction(id));
    console.log("deleting");
  };

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
      {peopleIds.length > 1 ? (
        <Button onClick={deleteMultiplePeople}>Delete People</Button>
      ) : null}

      <div id="people-list-container">
        {state.people.length > 1
          ? state.people.map((person) => (
              <div id="person-list-item-container">
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectItemChange(e, person.id)}
                />
                <PersonListItem key={Math.random()} person={person} />
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default PeopleList;
