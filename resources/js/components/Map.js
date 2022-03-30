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
import moment from "moment";

function Map({ center, zoom }) {
    const [accommodations, setAccommodations] = useState([]);
    const [services, setServices] = useState([]);
    const [foods, setFoods] = useState([]);
    const [transports, setTransports] = useState([]);
    const [user, setUser] = useState(null);
    const [searchResult, setSearchResults] = useState([]);
    const [values, setValues] = useState({
        from: {},
        to: {},
        dateFrom: "",
        dateTo: "",
    });

    const fetchAccommodations = async () => {
        const res = await axios.get("/api/accomodation");
        setAccommodations(res.data);
    };

    const fetchSearch = async () => {
        const res = await axios.get("/api/search", {
            from: values.start_date,
            to: values.end_date,
            dateFrom: values.dateFrom,
            dateTo: values.dateTo,
        });
        setSearchResults(res.data);
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
        const res = await axios.get("/api/users/");
        setUser(res.data);
    };

    useEffect(() => {
        fetchAccommodations();
        fetchFood();
        fetchServices();
        fetchTransport();
        fetchUser();
        fetchSearch();
    }, []);

    const handleChangeSearch = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const [selection, setSelection] = useState({});
    // console.log("heyyy", values.dateFrom);
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
            <div className="offerslisted__container">
                <p>
                    <strong>Search Accommodation: </strong>
                </p>
                <strong>Available From:</strong>
                <input
                    type="date"
                    name="dateFrom"
                    onChange={handleChangeSearch}
                    value={values.dateFrom}
                />
                <strong>Available To:</strong>
                <input
                    type="date"
                    name="dateTo"
                    onChange={handleChangeSearch}
                    value={values.dateTo}
                />
            </div>

            <section className="offerslisted__container">
                <div className="offerslisted__category">
                    <h3>Accommodation</h3>
                    {accommodations.length ? (
                        accommodations
                            .filter((element) =>
                                values.dateFrom
                                    ? moment(element.start_date) <=
                                      moment(values.dateFrom)
                                    : true
                            )
                            .filter((element) =>
                                values.dateTo
                                    ? moment(element.end_date) >=
                                      moment(values.dateTo)
                                    : true
                            )
                            .map((accommodation, id) => (
                                <MapAccommodationList
                                    key={id}
                                    element={accommodation}
                                />
                            ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className="offerslisted__category">
                    <h3>Food</h3>
                    {foods.length ? (
                        foods.map((foods, id) => (
                            <MapFoodList key={id} element={foods} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="offerslisted__category">
                    <h3>Service</h3>
                    {services.length ? (
                        services.map((services, id) => (
                            <MapServiceList key={id} element={services} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="offerslisted__category">
                    <h3>Transport</h3>
                    {transports.length ? (
                        transports.map((transport, id) => (
                            <MapTransportList key={id} element={transport} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Map;
