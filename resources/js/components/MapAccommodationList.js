import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import ContactInfoList from "./ContactInfoList";

const MapAccommodationList = ({ element }) => {
    const [selection, setSelection] = useState(false);

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
                            <strong>Available From: </strong>
                        </p>
                        <p>{element.start_date}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>
                            <strong>Available To: </strong>
                        </p>
                        <p>{element.end_date}</p>
                    </div>

                    <Button
                        style={{
                            width: "150px",
                            height: "55px",
                            borderRadius: 25,
                            backgroundColor: "#ba7735",
                            padding: "18px 36px",
                            fontSize: "12px",
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

export default MapAccommodationList;
