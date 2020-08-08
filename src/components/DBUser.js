import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import Swal from "sweetalert2";

export default class DBUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  entryDeleteHandler(e) {
    let trackingId =
      e.target.parentElement.parentElement.childNodes[6].innerHTML;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Axios.post("https://api.greytogreen.in/database/delete", {
          password: "greenmaniacs",
          trackingId: trackingId,
        }).then(() => {});
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    });
  }

  render() {
    return (
      <tr>
        <td id="sno">{this.props.index + 1}</td>
        <td className="dbName">{this.props.name}</td>
        <td className="dbEmail">{this.props.email}</td>
        <td className="dbDate">{this.props.date}</td>
        <td className="dbMessage">{this.props.message}</td>
        <td className="dbNumTrees">{this.props.trees}</td>
        <td className="dbTrackingId">{this.props.trackingId}</td>
        <td className="dbGift">{this.props.gift}</td>
        <td className="dbGiftTo">{this.props.giftTo}</td>
        <td className="dbGiftFrom">{this.props.giftFrom}</td>
        <td className="dbGiftMessage">{this.props.giftMessage}</td>
        <td className="dbPaidBy">{this.props.paidBy}</td>
        <td
          className="crudActions"
          onClick={this.entryDeleteHandler.bind(this)}
        >
          <i className="fas fa-trash-alt"></i>
        </td>
      </tr>
    );
  }
}
