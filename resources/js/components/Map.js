import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css";
import 'leaflet/dist/leaflet.css';

function Map({ center, zoom }) {
  console.log(MapContainer)
  return (
<MapContainer center={[50.073658, 14.418540]} zoom={12}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[50.073658, 14.418540]}>
    <Popup>
      Accomodation_test<br /> Olympijska 1/22
    </Popup> 
  </Marker>
</MapContainer>
  );
}

export default Map;