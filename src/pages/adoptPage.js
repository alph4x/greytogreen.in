import React from "react";
import AdoptTrees from "../components/AdoptTrees";
// import Checkout from "./Checkout";
import { useRouter } from "./../util/router.js";

export default class adoptPage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <AdoptTrees />
      </div>
    );
  }
}
