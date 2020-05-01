import React from "react";
import "./adoptTrees.css";
import logo from "../assets/images/LOGO-2.png";
import AdoptForm from "./AdoptForm.js";
import axios from "axios";
import $ from "jquery";

export default class adoptComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numTrees: 4, //Default no of trees
      treePrice: 10, //Change tree price here (this will be static)
      totalPrice: 0, //Default no of trees' price (don't change here, gets calculated automatically later)
      first_term: 5,
    };

    this.openCheckout = this.openCheckout.bind(this);
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
      handler: async function (response) {
        //captures frontend details & response details
        let objToSend = {
          ...response,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          message: this.state.message,
          gift: this.state.gift,
          giftTo: this.state.giftTo,
          giftFrom: this.state.giftFrom,
          giftMessage: this.state.giftMessage,
          totalPrice: this.state.totalPrice,
          amount: this.state.numTrees,
        };
        //send all details to server
        await axios
          .post("http://localhost:4500/getDetails/razorpay", objToSend)
          .then((res) => {
            //recieve success callback URL and redirect
            window.location = res.data;
          });
      },
      external: {
        wallets: ["paytm"],
        handler: async function (data) {
          let id;
          let objToSend = {
            ...data,
            message: this.state.message,
            gift: this.state.gift,
            giftTo: this.state.giftTo,
            giftFrom: this.state.giftFrom,
            giftMessage: this.state.giftMessage,
            //razorpay sends amount in paise, instead of rs (/100)
            amount: data.amount / 100,
            trees: this.state.numTrees,
          };
          //send frontend details to server(DB) and get an ID
          await axios
            .post("http://localhost:4500/getDetails/paytm", objToSend)
            .then((response) => {
              id = response.data.id;
            });
          //redirect to paytm payment page
          window.location =
            "http://localhost:4500/pay/paywithpaytm/:" +
            id +
            "?amount=" +
            this.state.totalPrice;
        },
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

    options.handler = options.handler.bind(this);
    options.external.handler = options.external.handler.bind(this);

    let rzp = new window.Razorpay(options);
    rzp.open();
  }

  //SUBMIT BUTTON HANDLER
  async submitHandler() {
    //get server generated order details
    await axios
      .post("http://localhost:4500/pay/razorpay", {
        price: this.state.totalPrice,
      })
      .then((response) => {
        this.setState({ ...this.state, order_id: response.data.id });
      });
    //razorpay handler
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

    //sec2
    document.getElementById("sec2").style.display = "none";
  }

  async getFormDetails(formData) {
    await this.setState({
      ...this.state,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      gift: formData.gift,
      giftTo: formData.giftTo,
      giftFrom: formData.giftFrom,
      giftMessage: formData.giftMessage,
    });
    console.log(this.state);
  }

  btnHandler() {
    document.getElementById("sec2").style.display = "block";
    $("html, body").animate(
      {
        scrollTop: $("#sec2").offset().top,
      },
      1500
    );
    document.getElementById("leaves").style.display = "block";
  }

  render() {
    return (
      <div className="main-container">
        <div id="sec1" className="sec1">
          <h1 id="trees_title" className="title is-1 is-caslon center">
            How many trees do you want to adopt/gift?
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
              id="adoptNowBtn"
              className="adopt-btn center"
              onClick={this.btnHandler.bind(this)}
            >
              ADOPT NOW
            </span>
            <br />
            <br />
            <span className="redirect-subtxt center">
              One step closer to making an impact
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
