import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import 'leaflet/dist/leaflet.css';
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import defaultMarker, { defaultMarker2 } from './defaultMarker';

function Map({ center, zoom }) {
  console.log(MapContainer)
  return (
<MapContainer center={[50.073658, 14.418540]} zoom={12}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  <Marker position={[50.073658, 14.418540]} icon={defaultMarker}>
    <Popup className="request-popup">
      <div style={popupContent}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
          width="150"
          height="150"
        />
        <div className="m-2" style={popupHead}>
          Success!
        </div>
        <span style={popupText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </span>
        <div className="m-2" style={okText}>
          Okay
        </div>
      </div>
    </Popup>
  </Marker>


</MapContainer>
  );
}

export default Map;
