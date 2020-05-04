import Axios from "axios";

function submit({ name, email, message }) {
  return Axios.post("http://localhost:4500/contact", {
    name,
    email,
    message,
  });
}

export default { submit };
