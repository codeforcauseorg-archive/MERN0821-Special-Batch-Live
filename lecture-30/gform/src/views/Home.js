import { Button } from "@mui/material";
import { compose } from "@mui/system";
import axios from "axios";
import { useHistory } from "react-router";

export default function Home() {
  let history = useHistory();
  return (
    <div>
      <Button
        variant="contained"
        onClick={function () {
          axios
            .post("http://localhost:5000/forms/", {})
            .then(function (response) {
              history.push("/edit/" + response.data._id);
              //   console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        Create Blank Form
      </Button>
    </div>
  );
}
