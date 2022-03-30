import React, { useEffect, useState, Fragment } from "react";
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

const AccommodationMarker = ({ data }) => {
    const [address, setAddress] = useState(null);

    const key = "AIzaSyAjX6oTLphVZDKXvWPAmzOiFRx6lEwK_Sw";

    const getAddress = async () => {
        const options = {
            params: {
                address: data.area_address,
                key,
            },
        };

        const res = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            options
        );

        // console.log(address) // res.data.results.geometry.location
        setAddress(res.data.results[0].geometry.location);
    };

    const { user, description, type, pet_friendly, max_person, status } = data;

    useEffect(() => {
        if (data.area_address) {
            getAddress();
        }
    }, [data.area_address]);

    if (address) {
        return (
            <Fragment>
                <Marker
                    position={[address.lat, address.lng]}
                    icon={defaultMarker}
                >
                    <Popup className="request-popup">
                        <div style={popupContent}>
                            <div className="m-2" style={popupHead}>
                                Accommodation
                            </div>
                            <img
                                src="/images/accomodation.png"
                                width="150"
                                height="150"
                            />
                            <div className="cardonthemap" style={popupText}>
                                <br/>
                                <strong>Accomodation Owner's Name: </strong>
                                {user.name}
                                <br/>
                                <strong>Address: </strong>
                                {user.address}
                                <br/>
                                <strong>Description: </strong>
                                {description}
                                <br />
                                <strong>Type: </strong>
                                {type}
                                <br />
                                <strong>Pet friendly: </strong>
                                {pet_friendly}
                                <br />
                                <strong>Max number of people: </strong>
                                {max_person}
                                <br />
                                <strong>Offer status: </strong>
                                {status}
                                <br />
                                <strong>Phone number </strong>
                                {user.phone_number}
                                <br />
                            </div>
                            <div className="m-2" style={okText}>
                                {/* Okay */}
                            </div>
                        </div>
                    </Popup>
                </Marker>
            </Fragment>
        );
    } else {
        return <span>loading...</span>;
    }
};

export default AccommodationMarker;
