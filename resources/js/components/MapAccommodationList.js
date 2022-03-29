import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import ContactInfoList from "./ContactInfoList";

const MapAccommodationList = ({ element }) => {
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
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--accommodation">
                    <div className="offerslisted__listitem--type">
                        <p>
                            <strong>Type:</strong>
                        </p>
                        <p>{element.type}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>
                            <strong>Description:</strong>
                        </p>
                        <p>{element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>
                            <strong>Offer Created Time:</strong>
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
    );
};

export default MapAccommodationList;
