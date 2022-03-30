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
import MapTransportList from "./MapTransportList";
import MapAccommodationList from "./MapAccommodationList";
import MapFoodList from "./MapFoodList";
import MapServiceList from "./MapServiceList";

function Map({ center, zoom }) {
    const [accommodations, setAccommodations] = useState([]);
    const [services, setServices] = useState([]);
    const [foods, setFoods] = useState([]);
    const [transports, setTransports] = useState([]);
    const [user, setUser] = useState(null);

    const fetchAccommodations = async () => {
        const res = await axios.get("/api/accomodation");
        setAccommodations(res.data);
    };

    const fetchFood = async () => {
        const res = await axios.get("/api/food");
        setFoods(res.data);
    };

    const fetchServices = async () => {
        const res = await axios.get("/api/service");
        setServices(res.data);
    };

    const fetchTransport = async () => {
        const res = await axios.get("/api/transport");
        setTransports(res.data);
    };

    // models and api/controllers connected with user_id
    const fetchUser = async () => {
        const res = await axios.get("/api/users/" + element.user_id);
        setUser(res.data);
    };

    useEffect(() => {
        fetchAccommodations();
        fetchFood();
        fetchServices();
        fetchTransport();
        fetchUser();
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
            <div>
                <input />
                <input />
                <input />
                <input />
            </div>
            <div>
                <h3>Accommodation</h3>
                {accommodations.length ? (
                    accommodations.map((accommodation, id) => (
                        <MapAccommodationList
                            key={id}
                            element={accommodation}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div>
                <h3>Food</h3>
                {foods.length ? (
                    foods.map((foods, id) => (
                        <MapFoodList key={id} element={foods} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div>
                <h3>Service</h3>
                {services.length ? (
                    services.map((services, id) => (
                        <MapServiceList key={id} element={services} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div>
                <h3>Transport</h3>
                {transports.length ? (
                    transports.map((transport, id) => (
                        <MapTransportList key={id} element={transport} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default Map;
