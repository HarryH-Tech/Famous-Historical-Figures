import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddPerson from "./AddPerson";

function PeopleList() {
  const state = useSelector((state) => state.data);

  const handleDelete = (id) => {
    console.log("id");
  };

  return (
    <>
      <AddPerson />
      {state.people.length > 1
        ? state.people.map((person) => (
            <div key={Math.random()}>
              <Link to={`people/${person.id}`}>{person.name}</Link>

              <button onClick={handleDelete(person.id)}>Delete</button>
            </div>
          ))
        : null}
    </>
  );
}

export default PeopleList;
