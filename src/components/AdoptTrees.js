import React from "react";
import "./adoptTrees.css";
import { logo } from "../assets/images/LOGO-2.png";
import AdoptForm from "./AdoptForm.js";
import axios from "axios";

export default class adoptComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numTrees: 4, //Default no of trees
      treePrice: 10, //Change tree price here (this will be static)
      totalPrice: 0, //Default no of trees' price (don't change here, gets calculated automatically later)
      first_term: 5,
    };
  }

  performOp(e) {
    var operator = e.target.textContent;
    var num = this.state.numTrees;
    var newNum = eval(num + operator + 1);
    this.updateConf(newNum);
  }

  updateConf(newNum) {
    var tp = this.state.treePrice;
    this.setState({ numTrees: newNum });
    this.setState({ totalPrice: newNum * tp });
    console.log(this.state.totalPrice);
    document.getElementById("treesNumInput").value = newNum;
    const _tree = document.getElementsByClassName("tree");
    var delta = 20;
    if (window.screen.width > 500) {
      var newWidth = 150,
        newHeight = 150; //initial height and width of tree
    } else {
      var newWidth = 110,
        newHeight = 110; //initial height and width of tree (mobile view)
      this.setState({ first_term: 4 });
    }
    var GP = [
      this.state.first_term,
      this.state.first_term * 2,
      this.state.first_term * 4,
      this.state.first_term * 8,
      this.state.first_term * 16,
      this.state.first_term * 32,
    ];
    var ctr = 0;
    for (var i = 0; i < GP.length; i++) {
      if (newNum >= GP[i]) {
        ctr++;
      } else {
        break;
      }
    }
    newWidth -= ctr * delta;
    newHeight = newWidth;
    if (newWidth < 30) {
      newWidth = "30px";
      newHeight = "30px";
    }
    for (var i = 0; i < _tree.length; i++) {
      _tree[i].style.width = newWidth + "px";
      _tree[i].style.height = newHeight + "px";
    }
    const tree_div = (
      <div
        className="tree"
        style={{ width: newWidth, height: newHeight }}
      ></div>
    );
    this.trees_div = [];
    for (var i = 0; i < newNum; i++) {
      this.trees_div.push(tree_div);
    }
  }

  _handleChangeEvent(e) {
    var newVal = document.getElementById("treesNumInput").value;
    this.updateConf(newVal);
  }

  openCheckout() {
    let options = {
      key: "",
      amount: this.state.totalPrice,
      name: this.state.name,
      description: "Planting for a greener future",
      image: logo,
      order_id: this.state.order_id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: this.state.name,
        email: this.state.email,
        contact: this.state.phone,
      },
      notes: {
        address: "notes address",
      },
      theme: {
        color: "#577F67",
      },
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  }

  //SUBMIT BUTTON HANDLER
  async submitHandler() {
    console.log("old client order", this.state.order_id);
    //get order details from server
    console.log("axios", this.state.totalPrice);
    await axios
      .post("http://localhost:5500/pay/razorpay", {
        price: this.state.totalPrice,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ ...this.state, order_id: response.data.id });
      });
    //razorpay
    this.openCheckout();
  }

  componentWillMount() {
    this.setState({ totalPrice: this.state.numTrees * this.state.treePrice });
    const tree_div = <div className="tree"></div>;
    this.trees_div = [];
    const trees_num = this.state.numTrees;
    for (var i = 0; i < trees_num; i++) {
      this.trees_div.push(tree_div);
    }
  }

  componentDidMount() {
    //adding razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  async getFormDetails(formData) {
    await this.setState({
      ...this.state,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="main-container">
        <div className="sec1">
          <h1 id="trees_title" className="title is-1 center">
            How many trees do you want to adopt?
          </h1>

          {/* COUNTER */}
          <center>
            <div className="counter">
              <div
                id="decrement"
                className="operator column"
                onClick={(e) => {
                  this.performOp(e);
                }}
              >
                -
              </div>

              <input
                id="treesNumInput"
                type="number"
                onChange={(e) => {
                  this._handleChangeEvent(e);
                }}
                defaultValue={this.state.numTrees}
              ></input>
              <div
                className="operator column"
                onClick={(e) => {
                  this.performOp(e);
                }}
              >
                +
              </div>
            </div>
          </center>
          <div className="counter-undertext center">
            {this.state.numTrees} plants for{" "}
            <span className="price">&#8377;{this.state.totalPrice}</span>
          </div>
          {/* TREE GRID */}
          <center>
            <div className="treeVisual center">{this.trees_div}</div>
          </center>
          <br />
          <div className="center">
            <span className="adopt-btn center">ADOPT NOW</span>
            <br />
            <br />
            <span className="redirect-subtxt center">
              You will be redirected to a payment portal
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <AdoptForm
          payNow={this.submitHandler.bind(this)}
          getFormDetails={this.getFormDetails.bind(this)}
        />
      </div>
    );
  }
}
