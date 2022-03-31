import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import ContactInfoList from "./ContactInfoList";
import axios from "axios";

const MapTransportList = ({ element }) => {
    const [selection, setSelection] = useState(false);

    const handleClick = () => {
        return setSelection(!selection);
    };

    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--transport">
                    <div className="offerslisted__listitem--locationfrom">
                        <p>
                            <strong>Location From: </strong>
                        </p>
                        <p>{element.location_from}</p>
                    </div>

                    <div className="offerslisted__listitem--destination">
                        <p>
                            <strong>Destination: </strong>
                        </p>
                        <p>{element.destination}</p>
                    </div>

                    <div className="offerslisted__listitem--date">
                        <p>
                            <strong>Transport Date: </strong>
                        </p>
                        <p>{element.date}</p>
                    </div>

                    <div className="offerslisted__listitem--maxperson">
                        <p>
                            <strong>Max Person: </strong>
                        </p>
                        <p>{element.max_person}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p>
                            <strong>Status: </strong>
                        </p>
                        <p>{element.status}</p>
                    </div>
                    <br></br>
                    <Button
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#21b6ae",
                            padding: "18px 36px",
                            fontSize: "18px",
                        }}
                        variant="contained"
                        onClick={handleClick}
                    >
                        Contact Info
                    </Button>

                    {selection && element.user && (
                        <ContactInfoList
                            element={element.user}
                            key={element.user.id}
                        />
                    )}
                </article>
                <hr></hr>
            </div>
        </div>
    );
};

export default MapTransportList;
