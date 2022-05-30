import { useState } from "react";
import { Link } from "react-router-dom";

// Redux Imports
import { deletePersonAction, editPersonAction } from "../redux/Actions";
import { useSelector, useDispatch } from "react-redux";

// MUI Imports
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import Button from "@mui/material/Button";

import Modal from "./CustomModal";

function PersonListItem({ person }) {
  const [modal, setModal] = useState({
    showing: false,
    type: "",
  });
  const { showing, type } = modal;

  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePersonAction(id));
  };

  const handleOpenModal = (e, type, person) => {
    console.log(type);
    e.preventDefault();
    setModal({ showing: !showing, type: type });
  };

  return (
    <div id="person-container" key={Math.random()}>
      <Link to={`people/${person.id}`}>{person.name}</Link>
      <p id="person-description">{person.description}</p>
      {showing ? (
        <Modal person={person} modal={modal} setModal={setModal} type={type} />
      ) : null}

      <br />
      <div id="list-button-container">
        <Button
          onClick={(e) => handleOpenModal(e, "delete")}
          variant="outlined"
          color="error"
        >
          <DeleteIcon sx={{ color: "red", cursor: "pointer", person }} />
        </Button>
        <Button
          onClick={(e) => handleOpenModal(e, "edit")}
          variant="outlined"
          color="success"
        >
          <ModeIcon sx={{ color: "green", cursor: "pointer", person }} />
        </Button>
      </div>
    </div>
  );
}

export default PersonListItem;
