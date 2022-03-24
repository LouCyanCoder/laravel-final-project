import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
// import './leaflet/dist/leaflet.css';
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import defaultMarker, { defaultMarker2 } from "./defaultMarker";
import "./styles.css";
import LeafletControlGeocoder from "./LeafletControlGeocoder";
import MarkerClusterGroup from "react-leaflet-markercluster";
import FilterServices from "./FilterServices";

function Map({ center, zoom }) {
    console.log(MapContainer);
    return (
        <>
            <FilterServices />
            <MapContainer
                className="markercluster-map"
                center={[50.073658, 14.41854]}
                zoom={12}
                maxZoom={18}
                minZoom={8}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletControlGeocoder />
                <MarkerClusterGroup>
                    <Marker
                        position={[50.073658, 14.41854]}
                        icon={defaultMarker}
                    >
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
                                <div className="cardonthemap" style={popupText}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </div>
                                <div className="m-2" style={okText}>
                                    Okay
                                </div>
                            </div>
                        </Popup>
                    </Marker>

                    <Marker
                        position={[50.091093, 14.400802]}
                        icon={defaultMarker2}
                    >
                        <Popup className="request-popup">
                            <div style={popupContent}>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/D4D35AQGxUmN29K_b5w/profile-framedphoto-shrink_400_400/0/1646341965876?e=1648116000&v=beta&t=IRfbId09WkriYINQQXB2waOGNvtyNd3IkPB9_oCmdXg"
                                    width="150"
                                    height="150"
                                />
                                <div className="m-2" style={popupHead}>
                                    Ekin's house
                                    <h2>
                                        III. nádvoří 48/2, 119 01 Praha
                                        1-Hradčany
                                    </h2>
                                </div>
                                <div style={popupText}>
                                    Welcome to the club, man!
                                </div>
                                <div className="m-2" style={okText}>
                                    ;)
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
}

export default Map;
