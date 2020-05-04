import React from "react";

import TrackInfo from "../components/trackInfo";
import TrackingId from "../components/trackingId";

export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
    };
    this.viewChange.bind(this);
  }

  async viewChange(view, userDetails) {
    if (view === 2) {
      await this.setState({ user: userDetails, view: 2 });
    }
  }

  render() {
    return (
      <div>
        {this.state.view === 1 ? (
          <TrackingId viewChange={this.viewChange.bind(this)} />
        ) : (
          <TrackInfo
            user={this.state.user}
            //convert mongoose decimals to float datatype
            lat={parseFloat(this.state.user.plantedLat.$numberDecimal)}
            lng={parseFloat(this.state.user.plantedLng.$numberDecimal)}
          />
        )}
      </div>
    );
  }
}
