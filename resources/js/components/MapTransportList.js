import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import ContactInfoList from "./ContactInfoList";
import axios from "axios";

const MapTransportList = ({ element }) => {
    const [users, setUsers] = useState([]);
    const [selection, setSelection] = useState(false);

    const fetchUsers = async () => {
        const res = await axios.get("/api/users");
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    let date = new Date(element.created_at);
    date = date.toISOString().slice(0, 10);

    const handleClick = () => {
        return setSelection(!selection);
    };

    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--transport">
                    <div className="offerslisted__listitem--locationfrom">
                        <p>
                            <strong>Location From:</strong>
                        </p>
                        <p>{element.location_from}</p>
                    </div>

                    <div className="offerslisted__listitem--destination">
                        <p>
                            <strong>Destination:</strong>
                        </p>
                        <p>{element.destination}</p>
                    </div>

                    <div className="offerslisted__listitem--date">
                        <p>
                            <strong>Transport Date:</strong>
                        </p>
                        <p>{element.date}</p>
                    </div>

                    <div className="offerslisted__listitem--maxperson">
                        <p>
                            <strong>Max Person:</strong>
                        </p>
                        <p>{element.max_person}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p>
                            <strong>Status:</strong>
                        </p>
                        <p>{element.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>
                            <strong>Offer Created Date:</strong>
                        </p>
                        <p>{date}</p>
                    </div>

                    <Button variant="outlined" onClick={handleClick}>
                        Contact Info
                    </Button>

                    {selection && users.length ? (
                        users.map((user, user_id) => (
                            <ContactInfoList element={user} key={user_id} />
                        ))
                    ) : (
                        <p></p>
                    )}
                </article>
                <hr></hr>
            </div>
        </div>
    );
};

export default MapTransportList;
