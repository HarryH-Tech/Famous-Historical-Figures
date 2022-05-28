import { useState } from "react";
import "../styles/AddPerson.css";

// Redux Imports
import { addPersonAction, showErrorAction } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

//MUI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddPerson() {
  const [formState, setFormState] = useState({
    name: "ere",
    dob: "er",
    description: "rer",
    image: "",
  });

  const { name, dob, description, image } = formState;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);

  function setInput(event) {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleAddPerson() {
    try {
      if (!name || !dob || !description || !image) {
        dispatch(showErrorAction("Please ensure all fields are filled in."));
      } else {
        dispatch(addPersonAction(formState));
      }
    } catch (err) {
      dispatch(showErrorAction("Sorry there was an error, please try again."));
    }
  }

  return (
    <Box id="add-box">
      <TextField
        onChange={(event) => setInput(event)}
        value={name}
        placeholder="Name"
        name="name"
        variant="outlined"
        className="add-form-input"
      />
      <TextField
        onChange={(event) => setInput(event)}
        value={dob}
        placeholder="Date of Birth"
        name="dob"
        variant="outlined"
        className="add-form-input"
      />
      <TextField
        onChange={(event) => setInput(event)}
        value={description}
        placeholder="Description"
        name="description"
        variant="outlined"
        className="add-form-input"
      />
      <TextField
        onChange={(event) => setInput(event)}
        value={image}
        placeholder="Image"
        name="image"
        variant="outlined"
        className="add-form-input"
      />
      {state.error && <p>{state.error}</p>}
      <Button id="add-button" onClick={handleAddPerson} variant="contained">
        Add Person
      </Button>
    </Box>
  );
}

export default AddPerson;
