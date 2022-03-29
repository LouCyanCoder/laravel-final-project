import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import ContactInfoList from "./ContactInfoList";
import axios from "axios";

const MapServiceList = ({ element }) => {
    const [users, setUsers] = useState([]);
    const [selection, setSelection] = useState(false);

    const fetchUsers = async () => {
        const res = await axios.get("/api/users");
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleClick = () => {
        return setSelection(!selection);
    };
    return (
        <div>
            <div>
                <div className="offerslisted__list">
                    <article className="offerslisted__listitem--service">
                        <div className="offerslisted__listitem--type">
                            <p>
                                <strong>Service Name:</strong>
                            </p>
                            <p>{element.name}</p>
                        </div>

                        <div className="offerslisted__listitem--description">
                            <p>
                                <strong>Description:</strong>
                            </p>
                            <p>{element.description}</p>
                        </div>

                        <div className="offerslisted__listitem--status">
                            <p>
                                <strong>Status:</strong>
                            </p>
                            <p>{element.status}</p>
                        </div>

                        <div className="offerslisted__listitem--dateadded">
                            <p>
                                <strong>Offer Created Time</strong>
                            </p>
                            <p>{element.created_at}</p>
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
                </div>
            </div>
        </div>
    );
};

export default MapServiceList;
