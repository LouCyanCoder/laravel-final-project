import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";

const TransportList = ({ element }) => {
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
                            <strong>Offer Created Time:</strong>
                        </p>
                        <p>{(element.created_at.slice(0, 10))}</p>
                    </div>

                    <div className="offerslisted__listitem--buttons">
                        <Button variant="outlined"><a href="#">Edit</a></Button>
                        <Button variant="contained" color="error"><a href="#">Delete</a></Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default TransportList;
