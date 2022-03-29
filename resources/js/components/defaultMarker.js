import L from "leaflet";

const defaultMarker = new L.icon({
  iconUrl: "/images/accomodation_marker.png",
  iconSize: [100, 100],
  iconAnchor: [50, 100],
  popupAnchor: [0, -80]
});

export const defaultMarker2 = new L.icon({
  iconUrl: "/images/service_marker.png",
  iconSize: [100, 100],
  iconAnchor: [50, 100],
  popupAnchor: [0, -80]
});

export const defaultMarker3 = new L.icon({
  iconUrl: "/images/food_marker.png",
  iconSize: [100, 100],
  iconAnchor: [50, 100],
  popupAnchor: [0, -80]
});

export default defaultMarker;