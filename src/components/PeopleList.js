import React from "react";

function PeopleList({ person: { name, description, dob, image } }) {
  // const  = person;
  return (
    <div>
      <p>{name}</p>ddd
      <p>{description}</p>
      {dob}
    </div>
  );
}

export default PeopleList;
