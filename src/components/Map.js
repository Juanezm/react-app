import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';


class Map extends Component {

  state = {
    viewport: {
      width: '100%',
      height: 730,
      latitude: 51.748055,
      longitude: -1.232048,
      zoom: 15
    }
  };

  render() {
    return (
      <ReactMapGL
       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Map;