import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
// import './leaflet/dist/leaflet.css';
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import defaultMarker, { defaultMarker2 } from "./defaultMarker";
import "./styles.css";
import LeafletControlGeocoder from "./LeafletControlGeocoder";
import MarkerClusterGroup from "react-leaflet-markercluster";
import FilterServices from "./FilterServices";
import axios from "axios";
import AccommodationMarker from "./AccommodationMarker";

function Map({ center, zoom }) {
    const [accommodations, setAccommodations] = useState([]);

    const fetchAccommotations = async () => {
        const res = await axios.get("/api/accomodation");
        setAccommodations(res.data);
    };
    console.log(accommodations);
    useEffect(() => {
        fetchAccommotations();
    }, []);

    const [selection, setSelection] = useState({});

    return (
        <>
            <FilterServices selection={selection} setSelection={setSelection} />
            <MapContainer
                className="markercluster-map"
                center={[50.073658, 14.41854]}
                zoom={12}
                maxZoom={18}
                // minZoom={8}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletControlGeocoder />
                <MarkerClusterGroup>
                    {selection.accommodation &&
                        !!accommodations.length &&
                        accommodations.map((element, index) => (
                            <AccommodationMarker data={element} key={index} />
                        ))}
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
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
}

export default Map;
