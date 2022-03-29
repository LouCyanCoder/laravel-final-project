import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import ContactInfoList from "./ContactInfoList";

const MapFoodList = ({ element }) => {
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
                            <strong>Available Date:</strong>
                        </p>
                        <p>{element.day}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>
                            <strong>Status:</strong>
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

export default MapFoodList;
