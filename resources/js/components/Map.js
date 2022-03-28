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
import FoodMarker from "./FoodMarker";
import ServiceMarker from "./ServiceMarker";

function Map({ center, zoom }) {
    const [accommodations, setAccommodations] = useState([]);
    const [services, setServices] = useState([]);
    const [foods, setFoods] = useState([]);

    const fetchAccommodations = async () => {
        const res = await axios.get("/api/accomodation");
        setAccommodations(res.data);
    };

    const fetchFood = async () => {
        const res = await axios.get("/api/food");
        setFoods(res.data);
        console.log(res);
    };

    const fetchServices = async () => {
        const res = await axios.get("/api/service");
        setServices(res.data);
    };

    useEffect(() => {
        fetchAccommodations();
        fetchFood();
        fetchServices();
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
                minZoom={8}
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

                    {selection.food &&
                        !!foods.length &&
                        foods.map((element, index) => (
                            <FoodMarker data={element} key={index} />
                        ))}

                    {selection.service &&
                        !!services.length &&
                        services.map((element, index) => (
                            <ServiceMarker data={element} key={index} />
                        ))}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
}

export default Map;
