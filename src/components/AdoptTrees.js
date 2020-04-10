import React from "react";
import "./adoptTrees.css";
import { logo } from "../assets/images/LOGO-2.png";
import AdoptForm from "./AdoptForm.js";

export default class adoptComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numTrees: 4, //Default no of trees
      treePrice: 1, //Change tree price here (this will be static)
      totalPrice: 0, //Default no of trees' price (don't change here, gets calculated automatically later)
      first_term: 5,
    };
  }

  openCheckout() {
    let options = {
      key: process.env.RZPKey,
      amount: this.state.treePrice,
      name: "test_name",
      description: "trees",
      image: logo,
      order_id: "test_orderID",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "test prefill name",
        email: "testprefill@email.com",
      },
      notes: {
        address: "notes address",
      },
      theme: {
        color: "#F37254",
      },
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
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

  //SUBMIT BUTTON HANDLER
  submitHandler() {
    // console.log(this.state);
    let data = { numTrees: this.state.numTrees, price: this.state.totalPrice };
    this.props.sendData(data);
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
            <span
              className="adopt-btn center"
              onClick={this.submitHandler.bind(this)}
            >
              ADOPT NOW
            </span>
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
        <AdoptForm />
      </div>
    );
  }
}
