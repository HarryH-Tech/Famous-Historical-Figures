import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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

  const handleOpenModal = (e, type) => {
    console.log(type);
    e.preventDefault();
    setModal({ showing: !showing, type: type });
  };

  return (
    <div id="person-container" key={uuidv4()}>
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
