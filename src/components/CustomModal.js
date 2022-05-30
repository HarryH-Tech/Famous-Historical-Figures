import { useState } from "react";

import { deletePersonAction, editPersonAction } from "../redux/Actions";
import { useSelector, useDispatch } from "react-redux";

import "../styles/Modal.css";

//MUI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function CustomModal({ modal, setModal, person, type }) {
  // const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(person);
  console.log(type);
  const [formState, setFormState] = useState({
    id: person.id,
    name: person.name,
    dob: person.dob,
    description: person.description,
    image: person.image,
  });

  function setInput(event) {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  const confirmEdit = () => {
    dispatch(editPersonAction(formState));
  };

  const confirmDelete = () => {
    dispatch(deletePersonAction(person.id));
  };

  console.log(type);
  return (
    <div>
      <Modal
        open={modal.showing}
        onClose={() => setModal({ ...modal, showing: false })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="modal">
          <TextField
            onChange={(event) => setInput(event)}
            name="name"
            id="modal-modal-title"
            value={formState.name}
          />
          <TextField
            onChange={(event) => setInput(event)}
            name="dob"
            value={formState.dob}
          />
          {type === "edit" ? (
            <>
              <Button onClick={confirmEdit}>Confirm Edit</Button>
              <Button onClick={() => setModal({ showing: false })}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button onClick={confirmDelete}>Delete</Button>
              <Button onClick={() => setModal({ showing: false })}>
                Cancel
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
