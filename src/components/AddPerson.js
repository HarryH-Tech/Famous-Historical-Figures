import { useState } from "react";
import "../styles/AddPerson.css";
import Error from "./utils/Error";

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
    image: "ww",
  });

  const { name, dob, description, image } = formState;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);

  function handleInput(event) {
    console.log(formState);
    event.preventDefault();
    if (state.errorMessage) {
      dispatch(showErrorAction(""));
    }
    console.log(formState);

    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleAddPerson() {
    // try {
    if (!name || !dob || !description || !image) {
      dispatch(showErrorAction("Please ensure all fields are filled in."));
      console.log(state);
    } else {
      dispatch(addPersonAction(formState));
    }
    // } catch (err) {
    //   dispatch(showErrorAction("Sorry there was an error, please try again."));
    // }
  }

  return (
    <Box id="add-box">
      <TextField
        onChange={(event) => handleInput(event)}
        value={name}
        placeholder="Name"
        name="name"
        variant="outlined"
        className="add-form-input"
      />
      <TextField
        onChange={(event) => handleInput(event)}
        value={dob}
        placeholder="Date of Birth"
        name="dob"
        variant="outlined"
        className="add-form-input"
      />
      <TextField
        onChange={(event) => handleInput(event)}
        value={description}
        placeholder="Description"
        name="description"
        variant="outlined"
        className="add-form-input"
        multiline
        minRows={5}
      />
      <TextField
        onChange={(event) => handleInput(event)}
        value={image}
        placeholder="Image"
        name="image"
        variant="outlined"
        className="add-form-input"
      />
      {state.successMessage && <p>{state.successMessage}</p>}
      {state.errorMessage ? <Error text={state.errorMessage} /> : null}
      <Button id="add-button" onClick={handleAddPerson} variant="contained">
        Add Person
      </Button>
    </Box>
  );
}

export default AddPerson;
