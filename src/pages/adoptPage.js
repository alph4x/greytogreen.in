import React from "react";
import AdoptTrees from "../components/AdoptTrees";
import AdoptForm from "../components/AdoptForm";
import { useRouter } from "./../util/router.js";

export default class adoptPage extends React.Component {
  constructor(props) {
    super();
    this.state = { numTrees: "", price: "" };
  }

  async getData(data) {
    await this.setState({ numTrees: data.numTrees, price: data.price });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <AdoptTrees sendData={this.getData.bind(this)} />
      </div>
    );
  }
}
