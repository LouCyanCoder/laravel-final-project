import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import ContactInfoList from "./ContactInfoList";

const MapAccommodationList = ({ element }) => {
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

    let date = new Date(element.created_at);
    date = date.toISOString().slice(0, 10);

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
                            <strong>Offer Created Date: </strong>
                        </p>
                        <p>{date}</p>
                    </div>

                    <Button variant="outlined" onClick={handleClick}>
                        Contact Info
                    </Button>
                    {selection && user && (
                        <ContactInfoList element={user} key={user.id} />
                    )}
                    {/* {selection && users.length ? (
                        users.map((user, user_id) => (
                            <ContactInfoList element={user} key={user_id} />
                        ))
                    ) : (
                        <p></p>
                    )} */}
                </article>
                <hr></hr>
            </div>
        </div>
    );
};

export default MapAccommodationList;
