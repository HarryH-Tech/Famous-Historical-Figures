import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Person.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonAction } from "../redux/Actions";

// MUI Imports
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Person(props) {
  const state = useSelector((state) => state.data);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonAction(id));
  }, []);

  const { name, dob, description, image } = state.person;

  return (
    <div>
      {name}
      <Link to="/">
        <ArrowBackIcon />
      </Link>
    </div>
  );
}

export default Person;
