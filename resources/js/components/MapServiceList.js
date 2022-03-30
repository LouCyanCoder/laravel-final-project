import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import ContactInfoList from "./ContactInfoList";
import axios from "axios";

const MapServiceList = ({ element }) => {
    const [selection, setSelection] = useState(false);

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
        </div>
    );
};

export default MapServiceList;
