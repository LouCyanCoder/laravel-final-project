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

    useEffect(() => {
        fetchAccommotations();
    }, []);

    return (
        <>
            <FilterServices />
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
                    {!!accommodations.length &&
                        accommodations.map((element, index) => (
                            <AccommodationMarker data={element} key={index} />
                        ))}
                    
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
}

export default Map;
