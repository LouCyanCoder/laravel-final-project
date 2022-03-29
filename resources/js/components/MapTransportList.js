import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import ContactInfoList from "./ContactInfoList";
import axios from "axios";

const MapTransportList = ({ element }) => {
    const [user, setUser] = useState(null);
    const [selection, setSelection] = useState(false);

    const fetchUser = async () => {
        const res = await axios.get("/api/users/" + element.user_id);
        setUser(res.data);
    };
    console.log(element);

    useEffect(() => {
        fetchUser();
    }, []);

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

                    <Button variant="outlined" onClick={handleClick}>
                        Contact Info
                    </Button>

                    {selection && user && (
                        <ContactInfoList element={user} key={user.id} />
                    )}
                </article>
                <hr></hr>
            </div>
        </div>
    );
};

export default MapTransportList;
