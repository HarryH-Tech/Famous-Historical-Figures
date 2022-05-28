import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Person.css";

// MUI Imports
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Person(props) {
  console.log(props);
  const { id } = useParams();

  useEffect(() => {
    // FETCH INDIVIDUAL PERSON
  });
  return (
    <div>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
    </div>
  );
}

export default Person;
