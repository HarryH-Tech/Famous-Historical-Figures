import { useState } from "react";
import { Link } from "react-router-dom";

// Custom Imports
import Modal from "./CustomModal";
import AddPerson from "./AddPerson";
import "../styles/PeopleList.css";

// Redux Imports
import { deletePersonAction, editPersonAction } from "../redux/Actions";
import { useSelector, useDispatch } from "react-redux";

// MUI Imports
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import Button from "@mui/material/Button";

function PeopleList({ user }) {
  const [modalShowing, setModalShowing] = useState(false);
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePersonAction(id));
  };

  const handleOpenEditModal = (e, id) => {
    e.preventDefault();
    setModalShowing(!modalShowing);
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

      <div id="people-list-container">
        {state.people.length > 1
          ? state.people.map((person) => (
              <div id="person-container" key={Math.random()}>
                <Link to={`people/${person.id}`}>{person.name}</Link>
                <p id="person-description">{person.description}</p>
                {modalShowing ? (
                  <Modal
                    person={person}
                    modalShowing={modalShowing}
                    setModalShowing={setModalShowing}
                    type={"edit"}
                  />
                ) : null}
                <br />
                <div id="list-button-container">
                  <Button variant="outlined" color="error">
                    <DeleteIcon
                      onClick={(e) => handleDelete(e, person.id)}
                      sx={{ color: "red", cursor: "pointer" }}
                    />
                  </Button>
                  <Button variant="outlined" color="success">
                    <ModeIcon
                      onClick={(e) => handleOpenEditModal(e, person.id)}
                      sx={{ color: "green", cursor: "pointer" }}
                    />
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default PeopleList;
