import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import ContactInfoList from "./ContactInfoList";

const MapFoodList = ({ element }) => {
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
                <article className="offerslisted__listitem--food">
                    <div className="offerslisted__listitem--type">
                        <p>
                            <strong>Food Name:</strong>
                        </p>
                        <p>{element.name}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>
                            <strong>Address:</strong>
                        </p>
                        <p>{element.address}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>
                            <strong>Description:</strong>
                        </p>
                        <p>{element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>
                            <strong>Day:</strong>
                        </p>
                        <p>{element.day}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
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

export default MapFoodList;
