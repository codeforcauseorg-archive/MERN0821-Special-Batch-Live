import axiosInstance from "../utils/axiosInstance";

export default function Profile() {
  return (
    <button
      onClick={() => {
        axiosInstance
          .get("http://localhost:5000/images/hello")
          .then((response) => console.log(response.data));
      }}
    >
      Profile
    </button>
  );
}
