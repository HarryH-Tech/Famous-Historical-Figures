import { useState } from "react";
import "../styles/Modal.css";

//  Redux Imports
import { deletePersonAction, editPersonAction } from "../redux/Actions";
import { useDispatch } from "react-redux";

//MUI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function CustomModal({ modal, setModal, person, type }) {
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

  const { name, dob, description, image } = formState;

  const confirmEdit = () => {
    setModal({ showing: false });
    dispatch(editPersonAction(formState));
  };

  const confirmDelete = () => {
    setModal({ showing: false });
    dispatch(deletePersonAction(person.id));
  };

  return (
    <div>
      <Modal
        open={modal.showing}
        onClose={() => setModal({ ...modal, showing: false })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="modal">
          {type === "edit" ? (
            <>
              <TextField
                onChange={(event) => setInput(event)}
                name="name"
                className="modal-field"
                value={name}
                placeholder="Name"
              />
              <TextField
                onChange={(event) => setInput(event)}
                name="dob"
                className="modal-field"
                value={dob}
                placeholder="Date of Birth"
              />
              <TextField
                onChange={(event) => setInput(event)}
                style={{ width: "90%" }}
                name="description"
                multiline
                minRows={8}
                className="modal-field"
                value={description}
                placeholder="Description..."
              />
              <TextField
                onChange={(event) => setInput(event)}
                name="image"
                className="modal-field"
                value={image}
                placeholder="image"
              />
              <br />
              <Button variant="contained" color="success" onClick={confirmEdit}>
                Confirm Edit
              </Button>{" "}
              <Button
                variant="contained"
                onClick={() => setModal({ showing: false })}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Typography className="modal-field" variant="h2">
                {name}
              </Typography>
              <Typography className="modal-field">
                Date of Birth: {dob}
              </Typography>
              <Typography className="modal-field">{description}</Typography>
              <Typography className="modal-field">{image}</Typography>
              <Button color="error" variant="contained" onClick={confirmDelete}>
                Delete
              </Button>{" "}
              <Button
                variant="contained"
                onClick={() => setModal({ showing: false })}
              >
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
