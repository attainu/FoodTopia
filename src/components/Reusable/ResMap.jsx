import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const ResMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{
        lat: parseFloat(props.locationDetails.latitude),
        lng: parseFloat(props.locationDetails.longitude),
      }}
    >
      <Marker
        position={{
          lat: parseFloat(props.locationDetails.latitude),
          lng: parseFloat(props.locationDetails.longitude),
        }}
      />
    </GoogleMap>
  ))
);

export default ResMap;
