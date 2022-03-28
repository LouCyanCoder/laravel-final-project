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

    const [serviceAddress, setServiceAddress] = useState(null)

    const key = "AIzaSyAjX6oTLphVZDKXvWPAmzOiFRx6lEwK_Sw";

    console.log(data)

    const getServiceAddress = async () => {
        
        const options = {
            params: {
                address: data.address, 
                key
            }
        }

        const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', options)
    
        // console.log(address) // res.data.results.geometry.location
        console.log(res.data.results[0].geometry.location)
        setServiceAddress(res.data.results[0].geometry.location)

    }

    const { address, name, description, day, status  } = data;
    

    useEffect(() => {
        console.log(data.address)
        if (data.address) {
            getServiceAddress()
        }
    }, [data.address])

    
    if (serviceAddress) {
        return (
            <Fragment>
                <Marker
                    position={[serviceAddress.lat, serviceAddress.lng]}
                    icon={defaultMarker2}
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
                                {address}
                                <br/>
                                {name}
                                <br/>
                                {description}
                                <br/>
                                {day}
                                <br/>
                                {status}
                                <br/>
                            </div>
                            <div className="m-2" style={okText}>
                                Okay
                            </div>
                        </div>
                    </Popup>
                </Marker>
            </Fragment>
        );
    } else {
        return <span>loading...</span>
    }

}

export default ServiceMarker;