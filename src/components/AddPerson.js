import { useState } from "react";
import { API, graphqlOperation, Amplify, Auth } from "aws-amplify";
import { createPerson } from "../graphql/mutations";

function AddPerson({ setPeople, people }) {
  const [pageDetails, setPageDetails] = useState({
    loading: false,
    error: "",
  });
  const [formState, setFormState] = useState({
    name: "",
    dob: "",
    description: "",
    image: "",
  });

  const { error, loading } = pageDetails;
  const { name, dob, description, image } = formState;

  function setInput(event) {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  async function addPerson() {
    try {
      if (!name || !dob || !description || !image) {
        setPageDetails({
          loading: false,
          error: "Please ensure all information is filled in",
        });
      }
      const person = { ...formState };
      setPeople([...people, person]);
      setFormState({
        name: "",
        dob: "",
        description: "",
        image: "",
      });
      await API.graphql(graphqlOperation(createPerson, { input: person }));
    } catch (err) {
      setPageDetails({
        loading: false,
        error: "Sorry there was an error, please try again.",
      });
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
      <button onClick={addPerson}>Create Person</button>
    </div>
  );
}

export default AddPerson;
