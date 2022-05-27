import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Person(props) {
  console.log(props);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {id}

      <Link to="/">
        <ArrowBackIcon />
      </Link>
    </div>
  );
}

export default Person;
