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
      await this.setState({ user: userDetails });
      this.setState({ view: 2 });
    }
  }

  render() {
    return (
      <div>
        {this.state.view === 1 ? (
          <TrackingId viewChange={this.viewChange.bind(this)} />
        ) : (
          <TrackInfo
            lat={this.state.user.plantedLat}
            lng={this.state.user.plantedLng}
          />
        )}
      </div>
    );
  }
}
