import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPerson } from "../redux/slice";

function AddPerson() {
  const [formState, setFormState] = useState({
    name: "ere",
    dob: "er",
    description: "rer",
    image: "erer",
  });

  const dispatch = useDispatch();

  const { name, dob, description, image } = formState;

  function setInput(event) {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleAddPerson() {
    try {
      if (!name || !dob || !description || !image) {
        console.log("ERORR");
      }
      dispatch(addPerson(formState));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <input
        onChange={(event) => setInput(event)}
        value={name}
        placeholder="Name"
        name="name"
      />
      <input
        onChange={(event) => setInput(event)}
        value={dob}
        placeholder="Date of Birth"
        name="dob"
      />
      <input
        onChange={(event) => setInput(event)}
        value={description}
        placeholder="Description"
        name="description"
      />
      <input
        onChange={(event) => setInput(event)}
        value={image}
        placeholder="Image"
        name="image"
      />
      <button onClick={handleAddPerson}>Create Person</button>
    </div>
  );
}

export default AddPerson;
