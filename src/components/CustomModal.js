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

function CustomModal({ modalShowing, setModalShowing, person, type }) {
  // const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

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

  console.log(type);
  return (
    <div>
      <Modal
        open={modalShowing}
        onClose={() => setModalShowing(false)}
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

          <Button onClick={confirmEdit}>Confirm Edit</Button>
          <Button onClick={() => setModalShowing(false)}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
