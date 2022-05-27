import { useSelector } from "react-redux";

function PeopleList() {
  const state = useSelector((state) => state.data);
  console.log(state.people);
  return (
    <>
      {state.people.length > 1
        ? state.people.map((person) => (
            <div key={Math.random()}>
              <p>{person.name}</p>
            </div>
          ))
        : null}
    </>
  );
}

export default PeopleList;
