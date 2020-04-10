import React from "react";
import { logo } from "../assets/images/LOGO-2.png";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    let options = {
      key: process.env.RZPKey,
      amount: this.props.price,
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
}
