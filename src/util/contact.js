import Axios from "axios";

function submit({ name, email, message }) {
  return Axios.post("https://api.greytogreen.in/contact", {
    name,
    email,
    message,
  });
}

export default { submit };
