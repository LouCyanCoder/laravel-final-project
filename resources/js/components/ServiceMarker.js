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

const ServiceMarker = ({ data }) => {
    const [serviceAddress, setServiceAddress] = useState(null);

    const key = "AIzaSyCiiNtM6Ty68mt_4SDkYmccOCI_HqqItvE";

    const getServiceAddress = async () => {
        const options = {
            params: {
                address: data.address,
                key,
            },
        };

        const res = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            options
        );

        // console.log(address) // res.data.results.geometry.location

        setServiceAddress(res.data.results[0].geometry.location);
    };

    const { user, address, name, description, day, status } = data;

    useEffect(() => {
        // console.log(data.address);
        if (data.address) {
            getServiceAddress();
        }
    }, [data.address]);

    if (serviceAddress) {
        return (
            <Fragment>
                <Marker
                    position={[serviceAddress.lat, serviceAddress.lng]}
                    icon={defaultMarker2}
                >
                    <Popup className="request-popup">
                        <div style={popupContent}>
                            <div className="m-2" style={popupHead}>
                                Service
                            </div>
                            <img
                                src="/images/helping.png"
                                width="150"
                                height="150"
                            />
                            <div className="cardonthemap" style={popupText}>
                                <br/>
                                <strong>Person's name: </strong>
                                {user && user.name}
                                <br/>
                                <strong>Adress: </strong>
                                {address}
                                <br />
                                <strong>Service type: </strong>
                                {name}
                                <br />
                                <strong>Description: </strong>
                                {description}
                                <br />
                                <strong>Offer status: </strong>
                                {status}
                                <br/>
                                <strong>Phone number </strong>
                                {user && user.phone_number}
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

export default ServiceMarker;
