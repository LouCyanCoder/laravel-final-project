import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import ContactInfoList from "./ContactInfoList";
import axios from "axios";


const MapServiceList = ({ element }) => {
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

                        <Button className="button_under_map" variant="outlined" onClick={handleClick}>
                            Contact Info
                        </Button>

                        {selection && user && (
                            <ContactInfoList element={user} key={user.id} />
                        )}
                    </article>
                    <hr></hr>
                </div>
            </div>
        </div>
    );
};

export default MapServiceList;
