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



const FoodMarker = ({ data }) => {

    const [address, setAddress] = useState(null)

    const key = "AIzaSyChehty7au22eyCkTPzqEF4u4FvvPSEb9g";


    const getAddress = async () => {
        
        const options = {
            params: {
                address: data.area_address, 
                key
            }
        }

        const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', options)
    
        // console.log(address) // res.data.results.geometry.location
        setAddress(res.data.results[0].geometry.location)

    }

    const { address, name, description, day, status  } = data;
    

    useEffect(() => {
        if (data.area_address) {
            getAddress()
        }
    }, [data.area_address])

    
    if (address) {
        return (
            <Fragment>
                <Marker
                    position={[address.lat, address.lng]}
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

export default FoodMarker;